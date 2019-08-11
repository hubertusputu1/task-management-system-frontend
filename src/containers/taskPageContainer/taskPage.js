import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { mapDispatch, mapState } from './taskPage.controller';
import AddTask from './addTask';

import ListTask from '../listTaskContainer';

import {
  STATUS_COMPLETED,
  STATUS_IN_PROGRESS,
  STATUS_NEW,
} from '../../constants/task.constant';

const styles = theme => ({
  root: {
    width: '97%',
    margin: 'auto',
    marginTop: '2em',
  },
});

class TaskPage extends Component {
  fetchTasks = () => {
    const { user, fetchTask } = this.props;

    fetchTask({ token: user.token });
  };

  fetchUsers = () => {
    const { user, userFetch } = this.props;

    userFetch({ token: user.token });
  };

  componentDidMount = () => {
    this.fetchTasks();
    this.fetchUsers();
  };

  render() {
    const { user, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ListTask
              status="New"
              tasks={_.filter(
                this.props.tasks,
                task => task.status === STATUS_NEW
              )}
              user={user}
            />
          </Grid>
          <Grid item xs={4}>
            <ListTask
              status="Doing"
              tasks={_.filter(
                this.props.tasks,
                task => task.status === STATUS_IN_PROGRESS
              )}
              user={user}
            />
          </Grid>
          <Grid item xs={4}>
            <ListTask
              status="Completed"
              tasks={_.filter(
                this.props.tasks,
                task => task.status === STATUS_COMPLETED
              )}
              user={user}
            />
          </Grid>
          <AddTask user={user} />
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TaskPage));
