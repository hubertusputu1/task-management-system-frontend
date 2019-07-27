import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return <Paper childElement={childElement} />;
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignIn);
