import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { mapDispatch, mapState } from './comment.controller';

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
    const { deleteComment, token } = this.props;
    deleteComment({ _id, token });
  };

  render() {
    const { classes, comment } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <IconButton
            edge="end"
            aria-label="edit"
            style={{ float: 'right' }}
            onClick={() => this.deleteComment(comment._id)}
          >
            <CloseIcon />
          </IconButton>
          <Typography component="h6">Creator</Typography>
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
