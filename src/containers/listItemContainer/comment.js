import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { mapDispatch, mapState } from './comment.controller';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

class CommentComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  editComment = _id => {
    const { deleteComment, user } = this.props;
    deleteComment({ _id, token: user.token });
  };

  render() {
    const { classes, comment } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Typography component="p">{comment.text}</Typography>
          <Typography component="p">
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
