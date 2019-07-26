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
                  return <SignIn />;
                }}
              />
              <Route
                exact
                path="/signup"
                render={props => {
                  return <SignUp />;
                }}
              />
              <Route
                render={props => {
                  return <NotFound />;
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
