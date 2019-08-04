import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { mapDispatch, mapState } from './listItem.controller';

const styles = theme => ({});

class ListItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  deleteTask = _id => {
    const { user, deleteTask } = this.props;
    deleteTask({ token: user.token, _id });
  };

  render() {
    const { classes, task } = this.props;
    return (
      <ListItem className={classes.listItem} key={task._id} button>
        <ListItemText primary={task.title} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => this.deleteTask(task._id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(ListItemContainer));
