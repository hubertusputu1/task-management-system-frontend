import React, { Component } from 'react';
import { mapDispatch, mapState } from './signUp.controller';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Sign Up Page</p>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignUp);
