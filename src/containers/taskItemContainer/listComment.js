import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { mapDispatch, mapState } from './listComment.controller';
import Comment from './comment';

const styles = theme => ({});

class ListComment extends Component {
  fetchComment = () => {
    const { fetchComment, user, taskId } = this.props;
    fetchComment({ token: user.token, taskId });
  };

  componentDidMount = () => {
    this.fetchComment();
  };

  render() {
    const { taskId, user } = this.props;

    return this.props.comments.length > 0
      ? this.props.comments.map(comment => (
          <Comment
            comment={comment}
            user={user}
            taskId={taskId}
            key={comment._id}
          />
        ))
      : 'Currently there is no comment on this task';
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(ListComment));
