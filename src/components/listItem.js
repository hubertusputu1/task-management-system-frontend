import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({});

class listItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, task } = this.props;
    return (
      <ListItem className={classes.listItem} key={task._id} button>
        <ListItemText primary={task.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(listItem);
