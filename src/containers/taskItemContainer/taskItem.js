import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { mapDispatch, mapState } from './taskItem.controller';
import ListComment from './listComment';
import InputComment from './inputComment';
import Task from './task';

import DialogComponent from '../../components/dialog';
import TextField from '../../components/textField';
import Select from '../../components/select';

import {
  STATUS_COMPLETED,
  STATUS_IN_PROGRESS,
  STATUS_NEW,
} from '../../constants/task.constant';

import { USER_ROLES_ADMIN } from '../../constants/user.constant';

const styles = theme => ({});

class TaskItemContainer extends Component {
  constructor(props) {
    super(props);
    const { task } = this.props;

    this.state = {
      title: task.title,
      description: task.description,
      assignedTo: task.assignedTo || '',
      createdBy: task.createdBy,
      open: false,
      setOpen: false,
      openView: false,
      setOpenView: false,
      status: STATUS_NEW,
    };
  }

  deleteTask = _id => {
    const { user, deleteTask } = this.props;
    deleteTask({ token: user.token, _id });
  };

  editTask = _id => {
    const { editTask, user, task } = this.props;
    const { title, description, status, assignedTo } = this.state;

    editTask({
      _id: task._id,
      token: user.token,
      title,
      description,
      status,
      assignedTo,
    });
  };

  dialogBody = () => {
    const { title, description, status, assignedTo } = this.state;

    const { users } = this.props;
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

    const userList = _.map(users, user => {
      return { value: user._id, name: user.name };
    });

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
            value={assignedTo || ''}
            onChangeFunction={e => this.handleChange('assignedTo', e)}
            menuItems={userList}
          />
        </Grid>
      </Grid>
    );
  };

  dialogBodyView = () => {
    const { task, user } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Task task={task} />
        </Grid>
        <Grid item xs={12}>
          <Typography component="p">Comments:</Typography>
        </Grid>
        <Grid item xs={12}>
          <ListComment user={user} taskId={task._id} />
        </Grid>
        <Grid item xs={12}>
          <InputComment user={user} taskId={task._id} />
        </Grid>
      </Grid>
    );
  };

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
        Edit
      </Button>
    </div>
  );

  handleOpenModal = () => {
    const { title, description, assignedTo, status } = this.props.task;
    this.setState({
      setOpen: true,
      open: true,
      title,
      description,
      assignedTo,
      status,
    });
  };

  handleCloseModal = async isSaved => {
    if (isSaved === true) {
      await this.editTask();
      this.resetState();
    }
    return this.resetState();
  };

  handleOpenViewModal = () => {
    const { title, description, assignedTo, status } = this.props.task;
    this.setState({
      setOpenView: true,
      openView: true,
      title,
      description,
      assignedTo,
      status,
    });
  };

  handleCloseViewModal = async isProcess => {
    return this.resetState();
  };

  handleChange = (name, event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  resetState = () => {
    this.setState({
      title: '',
      description: '',
      assignedTo: '',
      createdBy: '',
      open: false,
      setOpen: false,
      openView: false,
      setOpenView: false,
      status: STATUS_NEW,
    });
  };

  render() {
    const { classes, task, user } = this.props;
    return (
      <ListItem
        className={classes.listItem}
        key={task._id}
        button
        onClick={() => this.handleOpenViewModal(true)}
      >
        <ListItemText primary={task.title} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => this.handleOpenModal(task._id)}
          >
            <EditIcon />
          </IconButton>
          {user.userRole === USER_ROLES_ADMIN ? (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => this.deleteTask(task._id)}
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            ''
          )}
          <DialogComponent
            handleClose={this.handleCloseModal}
            open={this.state.open}
            id="task-edit-modal"
            title="Edit Task"
            actions={this.dialogActions}
            body={this.dialogBody()}
          />
          <DialogComponent
            handleClose={this.handleCloseViewModal}
            open={this.state.openView}
            id="task-view-modal"
            title="Task Detail"
            body={this.dialogBodyView()}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TaskItemContainer));
