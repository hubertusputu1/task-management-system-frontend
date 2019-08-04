import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { mapDispatch, mapState } from './listTask.controller';

import ListItem from '../listItemContainer';
import DialogComponent from '../../components/dialog';
import TextField from '../../components/textField';
import Select from '../../components/select';

import {
  STATUS_COMPLETED,
  STATUS_IN_PROGRESS,
  STATUS_NEW,
} from '../../constants/task.constant';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 700,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class ListTask extends Component {
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
        onClick={() => this.handleCloseModal(this.props.status)}
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
    const { userId, createTask, user } = this.props;
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
    const { classes, tasks, status, user } = this.props;

    return (
      <List className={classes.root} subheader={<li />}>
        <li key={`li-${status}`} className={classes.listSection}>
          <ul key={`ul-${status}`} className={classes.ul}>
            <ListSubheader>
              <div>
                {status} tasks
                <IconButton
                  edge="end"
                  aria-label="comments"
                  style={{ float: 'right' }}
                  onClick={() => this.handleOpenModal()}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </ListSubheader>
            {tasks.map(task => (
              <ListItem task={task} key={task} user={user} />
            ))}
          </ul>
        </li>
        <DialogComponent
          handleClose={this.handleCloseModal}
          open={this.state.open}
          id="task-modal"
          title="Create New Task"
          actions={this.dialogActions}
          body={this.dialogBody()}
        />
      </List>
    );
  }
}

// export default withStyles(styles)(ListTask);
export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(ListTask));
