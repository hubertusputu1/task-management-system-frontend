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
    display: 'flex',
    justifyContent: 'space-between',
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
      <div>
        <div className={classes.root}>
          <ListTask
            status="New"
            tasks={_.filter(
              this.props.tasks,
              task => task.status === STATUS_NEW
            )}
            user={user}
          />
          <ListTask
            status="Doing"
            tasks={_.filter(
              this.props.tasks,
              task => task.status === STATUS_IN_PROGRESS
            )}
            user={user}
          />
          <ListTask
            status="Completed"
            tasks={_.filter(
              this.props.tasks,
              task => task.status === STATUS_COMPLETED
            )}
            user={user}
          />
        </div>
        <AddTask user={user} />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TaskPage));
