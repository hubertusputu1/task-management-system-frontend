import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

class TextFieldComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, id, label, value, onChangeFunction } = this.props;

    return (
      <TextField
        id={id}
        label={label}
        className={classes.textField}
        value={value}
        type={this.props.type ? this.props.type : ''}
        onChange={e => onChangeFunction(e)}
        onKeyPress={
          this.props.onKeyPressFunction
            ? e => this.props.onKeyPressFunction(e)
            : () => {}
        }
        margin="normal"
      />
    );
  }
}

export default withStyles(styles)(TextFieldComponent);
