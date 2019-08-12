import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { mapDispatch, mapState } from './comment.controller';

import { USER_ROLES_ADMIN } from '../../constants/user.constant';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '2px',
    marginBottom: '2px',
  },
});

class CommentComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  deleteComment = _id => {
    const { deleteComment, user } = this.props;
    deleteComment({ _id, token: user.token });
  };

  getUser = id => {
    if (!id) return null;
    const { users } = this.props;
    return _.find(users, { _id: id }).name;
  };

  render() {
    const { classes, comment, user } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          {user.userRole === USER_ROLES_ADMIN ? (
            <IconButton
              edge="end"
              aria-label="edit"
              style={{ float: 'right' }}
              onClick={() => this.deleteComment(comment._id)}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            ''
          )}
          <Typography component="h6">{this.getUser(comment.userId)}</Typography>
          <Typography component="p">{comment.text}</Typography>
          <Typography variant="caption" gutterBottom>
            {moment(comment.createdAt).toString()}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(CommentComponent));
