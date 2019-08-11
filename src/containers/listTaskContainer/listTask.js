import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { mapDispatch, mapState } from './listTask.controller';

import ListItem from '../listItemContainer';

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, tasks, status, user } = this.props;

    return (
      <List className={classes.root} subheader={<li />}>
        <li key={`li-${status}`} className={classes.listSection}>
          <ul key={`ul-${status}`} className={classes.ul}>
            <ListSubheader>
              <div>{status} Tasks</div>
            </ListSubheader>
            {tasks.map(task => (
              <ListItem task={task} key={task._id} user={user} />
            ))}
          </ul>
        </li>
      </List>
    );
  }
}

// export default withStyles(styles)(ListTask);
export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(ListTask));
