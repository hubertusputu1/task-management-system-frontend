import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';

import NavBar from './containers/navBarContainer';
import SignIn from './containers/signInContainer';
import SignUp from './containers/signUpContainer';
import TaskPage from './containers/taskPageContainer';
import NotFound from './containers/notFoundContainer';
import { TITLE_MAIN } from './constants/navbar.constant';
import {
  TEXT_SIGN_IN,
  TEXT_SIGN_OUT,
  TEXT_SIGN_UP,
} from './constants/typography.constant';
import { PATH_SIGN_IN, PATH_SIGN_UP } from './constants/path.constant';
import { userSignOut } from './redux/action/user.action';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  renderDesktopHome = props => {
    return (
      <div>
        <NavBar
          {...props}
          title={TITLE_MAIN}
          buttonText={TEXT_SIGN_UP}
          enableMenu={false}
          onClickFunction={() => props.history.push(PATH_SIGN_UP)}
        />
        <SignIn {...props} />
      </div>
    );
  };

  renderDesktopSignup = props => {
    return (
      <div>
        <NavBar
          {...props}
          title={TITLE_MAIN}
          buttonText={TEXT_SIGN_IN}
          enableMenu={false}
          onClickFunction={() => props.history.push(PATH_SIGN_IN)}
        />
        <SignUp {...props} />
      </div>
    );
  };

  renderDesktopTask = props => {
    return (
      <div>
        <NavBar
          {...props}
          title={TITLE_MAIN}
          buttonText={TEXT_SIGN_OUT}
          enableMenu={false}
          onClickFunction={() => this.props.userSignOut(this.props.user.token)}
        />
        <TaskPage {...props} user={this.props.user} />
      </div>
    );
  };

  renderDesktopNotFound = props => {
    return (
      <div>
        <NavBar {...props} title={TITLE_MAIN} enableMenu={false} />
        <NotFound {...props} />
      </div>
    );
  };

  render() {
    let isDesktopView = true;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return this.props.user.token ? (
                    <Redirect to={'/task'} push={true} />
                  ) : isDesktopView ? (
                    this.renderDesktopHome(props)
                  ) : (
                    'render mobile view'
                  );
                }}
              />
              <Route
                exact
                path="/signup"
                render={props => {
                  return this.props.user.token ? (
                    <Redirect to={'/task'} push={true} />
                  ) : isDesktopView ? (
                    this.renderDesktopSignup(props)
                  ) : (
                    'render mobile view'
                  );
                }}
              />
              <Route
                exact
                path="/task"
                render={props => {
                  return this.props.user.token ? (
                    isDesktopView ? (
                      this.renderDesktopTask(props)
                    ) : (
                      'render mobile view'
                    )
                  ) : (
                    <Redirect to={'/'} push={true} />
                  );
                }}
              />
              <Route
                render={props => {
                  return isDesktopView
                    ? this.renderDesktopNotFound(props)
                    : 'render mobile view';
                }}
              />
            </Switch>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  state => {
    return {
      user: state.user.user,
    };
  },
  dispatchEvent => {
    return {
      userSignOut: data => dispatchEvent(userSignOut(data)),
    };
  }
)(App);
