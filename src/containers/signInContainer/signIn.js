import React, { Component } from 'react';
import { mapDispatch, mapState } from './signIn.controller';
import { connect } from 'react-redux';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Sign In Page</p>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignIn);
