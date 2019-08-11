import React, { Component } from 'react';
import { mapDispatch, mapState } from './notFound.controller';
import { connect } from 'react-redux';

class NotFound extends Component {
  render() {
    return (
      <div>
        <p>404 Page</p>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(NotFound);
