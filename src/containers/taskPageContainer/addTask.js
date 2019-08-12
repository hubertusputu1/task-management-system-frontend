import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Fab, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import { mapDispatch, mapState } from './addTask.controller';

import TextField from '../../components/textField';
import Select from '../../components/select';
import DialogComponent from '../../components/dialog';
import {
  STATUS_COMPLETED,
  STATUS_IN_PROGRESS,
  STATUS_NEW,
} from '../../constants/task.constant';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      assignedTo: '',
      createdBy: '',
      open: false,
      setOpen: false,
      status: STATUS_NEW,
    };
  }

  dialogActions = (
    <div>
      <Button onClick={() => this.handleCloseModal()} color="primary">
        Close
      </Button>
      <Button
        onClick={() => this.handleCloseModal(true)}
        color="primary"
        autoFocus
      >
        Create
      </Button>
    </div>
  );

  dialogBody = () => {
    const { title, description, status, assignedTo, createdBy } = this.state;
    const statusList = [
      {
        value: STATUS_NEW,
        name: STATUS_NEW,
      },
      {
        value: STATUS_IN_PROGRESS,
        name: STATUS_IN_PROGRESS,
      },
      {
        value: STATUS_COMPLETED,
        name: STATUS_COMPLETED,
      },
    ];

    const userList = [];

    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            id="title"
            label="Title"
            value={title}
            onChangeFunction={e => this.handleChange('title', e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            value={description}
            onChangeFunction={e => this.handleChange('description', e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            id="status"
            name="Status"
            value={status}
            onChangeFunction={e => this.handleChange('status', e)}
            menuItems={statusList}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            id="assignedTo"
            name="Assign To"
            value={assignedTo}
            onChangeFunction={e => this.handleChange('assignedTo', e)}
            menuItems={userList}
          />
        </Grid>
      </Grid>
    );
  };

  handleChange = (name, event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  createTask = () => {
    const { createTask, user } = this.props;
    const { title, description, status, assignedTo } = this.state;

    createTask({
      token: user.token,
      userId: user._id,
      title,
      description,
      status,
      assignedTo,
    });
  };

  handleOpenModal = () => {
    this.setState({ setOpen: true, open: true });
  };

  handleCloseModal = async status => {
    if (status) {
      await this.createTask();
      this.resetState();
    }
    return this.resetState();
  };

  resetState = () => {
    this.setState({
      title: '',
      description: '',
      assignedTo: '',
      createdBy: '',
      open: false,
      setOpen: false,
      status: STATUS_NEW,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab
          aria-label="add task"
          className={classes.fab}
          color="primary"
          onClick={() => this.handleOpenModal()}
        >
          <AddIcon />
        </Fab>
        <DialogComponent
          handleClose={this.handleCloseModal}
          open={this.state.open}
          id="task-modal"
          title="Create New Task"
          actions={this.dialogActions}
          body={this.dialogBody()}
        />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(AddTask));
