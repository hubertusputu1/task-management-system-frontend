import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { mapDispatch, mapState } from './task.controller';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    minWidth: 500,
  },
});

class TaskComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  getUser = id => {
    if (!id) return null;
    const { users } = this.props;
    return _.find(users, { _id: id }).name;
  };

  render() {
    const { classes, task } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            {task.title}
          </Typography>
          <Typography component="p">Status: {task.status}</Typography>
          <Typography component="p">Description: {task.description}</Typography>
          <Typography component="p">
            Created At: {moment(task.createdAt).toString()}
          </Typography>
          <Typography component="p">
            Assigned To:{' '}
            {this.getUser(task.assignedTo)
              ? this.getUser(task.assignedTo)
              : 'not assigned'}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TaskComponent));
