import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { mapDispatch, mapState } from './inputComment.controller';

const styles = theme => ({
  textField: {
    width: '90%',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class InputComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }

  handleChange = (name, event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      this.createComment();
    }
  };

  createComment = () => {
    const { comment } = this.state;
    if (!comment) return;
    const { taskId, user, createComment } = this.props;
    createComment({
      text: comment,
      token: user.token,
      userId: user._id,
      taskId,
    });
    this.setState({ comment: '' });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          id="new-comemnt"
          label="Add Comment"
          placeholder="add comment here"
          className={classes.textField}
          variant="outlined"
          value={this.state.comment}
          onChange={e => this.handleChange('comment', e)}
          onKeyDown={e => this.handleSubmitOnEnter(e)}
        />
        <Fab size="small" aria-label="add">
          <SendIcon onClick={() => this.createComment()} />
        </Fab>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(InputComment));
