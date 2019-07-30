import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
});

class ButtonComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, childElement, color } = this.props;

    return (
      <Button
        color={color}
        variant={this.props.variant ? this.props.variant : ''}
        className={classes.button}
        onClick={() => this.props.onClickFunction()}
      >
        {childElement}
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonComponent);
