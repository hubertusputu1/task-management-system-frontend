import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    width: 200,
  },
});

class SelectComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      id,
      name,
      value,
      onChangeFunction,
      menuItems,
    } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <Select
          value={value}
          className={classes.select}
          onChange={e => onChangeFunction(e)}
          inputProps={{
            name,
            id,
          }}
        >
          {menuItems.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectComponent);
