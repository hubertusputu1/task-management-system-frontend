import React, { Component } from 'react';
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
    const { token, fetchTask } = this.props;

    fetchTask({ token });
  };

  render() {
    console.log('ini props ', this.props);
    const { user } = this.props;
    const tasks = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
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
                tasks={this.props.tasks}
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
