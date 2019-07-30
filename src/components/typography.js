import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({});

class TypographyComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { variant, text } = this.props;

    return <Typography variant={variant}>{text}</Typography>;
  }
}

export default withStyles(styles)(TypographyComponent);
