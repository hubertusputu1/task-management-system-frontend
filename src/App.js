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
import NotFound from './containers/notFoundContainer';

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
                      <NavBar {...props} enableMenu={false} />
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
                      <NavBar {...props} enableMenu={false} />
                      <SignUp {...props} />
                    </div>
                  );
                }}
              />
              <Route
                render={props => {
                  return (
                    <div>
                      <NavBar {...props} enableMenu={false} />
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
    return {};
  },
  null
)(App);
