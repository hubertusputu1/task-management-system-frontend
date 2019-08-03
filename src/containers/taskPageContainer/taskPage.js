import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Grid from '@material-ui/core/Grid';

import { mapDispatch, mapState } from './taskPage.controller';

import ListTask from '../listTaskContainer';
import {
  STATUS_COMPLETED,
  STATUS_IN_PROGRESS,
  STATUS_NEW,
} from '../../constants/task.constant';

class TaskPage extends Component {
  constructor(props) {
    super(props);
  }

  fetchTasks = () => {
    const { user, fetchTask } = this.props;

    fetchTask({ token: user.token });
  };

  componentDidMount = () => {
    this.fetchTasks();
  };

  render() {
    const { user } = this.props;
    return (
      <div
        style={{
          width: '97%',
          margin: 'auto',
          marginTop: '2em',
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ListTask
                status={STATUS_NEW}
                tasks={_.filter(
                  this.props.tasks,
                  task => task.status === STATUS_NEW
                )}
                user={user}
              />
            </Grid>
            <Grid item xs={4}>
              <ListTask
                status={STATUS_IN_PROGRESS}
                tasks={_.filter(
                  this.props.tasks,
                  task => task.status === STATUS_IN_PROGRESS
                )}
                user={user}
              />
            </Grid>
            <Grid item xs={4}>
              <ListTask
                status={STATUS_COMPLETED}
                tasks={_.filter(
                  this.props.tasks,
                  task => task.status === STATUS_COMPLETED
                )}
                user={user}
              />
            </Grid>
          </Grid>
        </DndProvider>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TaskPage);
