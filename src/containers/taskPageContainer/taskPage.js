import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatch, mapState } from './taskPage.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import { VARIANT_H6, TEXT_SIGN_IN } from '../../constants/typography.constant';
import { COLOR_PRIMARY } from '../../constants/color.constant';
import { VARIANT_BUTTON_CONTAINED } from '../../constants/button.constant';

class TaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }

  fetchTasks = () => {
    const { token, fetchTask } = this.props;

    fetchTask({ token });
  };

  createTask = () => {
    const { token, userId, createTask } = this.props;
    const { title, description } = this.state;

    createTask({ token, userId, title, description });
  };

  deleteTask = _id => {
    const { token, deleteTask } = this.props;

    deleteTask({ token, _id });
  };

  editTask = (_id, status) => {
    const { token, editTask } = this.props;
    const { title, description } = this.state;

    editTask({ token, _id, status, title, description });
  };

  render() {
    const childElement = (
      <div style={{ textAlign: 'center' }}>
        <Typography variant={VARIANT_H6} text="TASK PAGE" />
      </div>
    );
    return (
      <div style={{ width: '30%', margin: 'auto', marginTop: '2em' }}>
        <Paper childElement={childElement} />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TaskPage);
