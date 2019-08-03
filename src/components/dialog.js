import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minWidth: 800,
  },
});

class DialogComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, handleClose, open, title, id, body, actions } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={id}
        aria-describedby={id}
      >
        <DialogTitle id={id}>{title}</DialogTitle>
        <DialogContent>{body}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(DialogComponent);
