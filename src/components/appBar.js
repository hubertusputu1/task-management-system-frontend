import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { VARIANT_H5 } from '../constants/typography.constant';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class AppBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderMenuButton = classes => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
    );
  };

  renderRightButton = (buttonText, onClickFunction) => {
    return (
      <Button color="inherit" onClick={() => onClickFunction()}>
        {buttonText}
      </Button>
    );
  };

  renderTitleBar = (variant, classes, title) => {
    return (
      <Typography variant={variant} className={classes.title}>
        {title}
      </Typography>
    );
  };

  render() {
    const {
      classes,
      enableMenu,
      title,
      buttonText,
      onClickFunction,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {enableMenu ? this.renderMenuButton(classes) : ''}
            {this.renderTitleBar(VARIANT_H5, classes, title)}
            {buttonText
              ? this.renderRightButton(buttonText, onClickFunction)
              : ''}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarComponent);
