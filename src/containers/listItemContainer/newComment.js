import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import { mapDispatch, mapState } from './newComment.controller';

const styles = theme => ({
  textField: {
    width: '100%',
  },
});

class NewComment extends Component {
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
      <TextField
        id="new-comemnt"
        label="Add Comment"
        placeholder="add comment here"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={this.state.comment}
        onChange={e => this.handleChange('comment', e)}
        onKeyDown={e => this.handleSubmitOnEnter(e)}
      />
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(NewComment));
