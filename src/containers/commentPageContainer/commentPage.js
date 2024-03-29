import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatch, mapState } from './commentPage.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import { VARIANT_H6, TEXT_SIGN_IN } from '../../constants/typography.constant';
import { COLOR_PRIMARY } from '../../constants/color.constant';
import { VARIANT_BUTTON_CONTAINED } from '../../constants/button.constant';

class CommentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }

  fetchComments = () => {
    const { token, taskId, fetchComment } = this.props;

    fetchComment({ token, taskId });
  };

  onSubmitComment = () => {
    const { token, taskId, userId, createComment } = this.props;
    const { comment } = this.state;

    createComment({ token, taskId, userId, text: comment });
  };

  onDeleteComment = _id => {
    const { token, deleteComment } = this.props;

    deleteComment({ _id, token });
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
)(CommentPage);
