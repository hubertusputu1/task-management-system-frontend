import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatch, mapState } from './navBar.controller';

import AppBar from '../../components/appBar';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppBar {...this.props} />;
  }
}

export default connect(
  mapState,
  mapDispatch
)(NavBar);
