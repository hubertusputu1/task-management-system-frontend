import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
            Assigned To: {task.assignedTo ? task.assignedTo : 'not assigned'}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TaskComponent);
