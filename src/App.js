import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
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
import {
  PATH_SIGN_IN,
  PATH_SIGN_UP,
  PATH_SIGN_OUT,
} from './constants/path.constant';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <div>
                      <NavBar
                        {...props}
                        title={TITLE_MAIN}
                        buttonText={TEXT_SIGN_UP}
                        enableMenu={false}
                        path={PATH_SIGN_UP}
                      />
                      <SignIn {...props} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/signup"
                render={props => {
                  return (
                    <div>
                      <NavBar
                        {...props}
                        title={TITLE_MAIN}
                        buttonText={TEXT_SIGN_IN}
                        enableMenu={false}
                        path={PATH_SIGN_IN}
                      />
                      <SignUp {...props} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/task"
                render={props => {
                  return (
                    <div>
                      <NavBar
                        {...props}
                        title={TITLE_MAIN}
                        buttonText={TEXT_SIGN_OUT}
                        enableMenu={true}
                        path={PATH_SIGN_OUT}
                      />
                      <TaskPage {...props} />
                    </div>
                  );
                }}
              />
              <Route
                render={props => {
                  return (
                    <div>
                      <NavBar
                        {...props}
                        title={TITLE_MAIN}
                        enableMenu={false}
                      />
                      <NotFound {...props} />
                    </div>
                  );
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
    console.log('ini state ', state);
    return {};
  },
  null
)(App);
