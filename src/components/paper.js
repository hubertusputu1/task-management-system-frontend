import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing(6, 2),
  },
});

class PaperComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, childElement } = this.props;

    return <Paper className={classes.root}>{childElement}</Paper>;
  }
}

export default withStyles(styles)(PaperComponent);
