import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom';

import { mapDispatch, mapState } from './signIn.controller';

import Paper from '../../components/paper';
import Typography from '../../components/typography';
import { VARIANT_H5 } from '../../constants/typography.constant';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childElement = (
      <div>
        <Typography variant={VARIANT_H5} text="Login Page" />
      </div>
    );
    return (
      <div>
        <Paper childElement={childElement} />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignIn);
