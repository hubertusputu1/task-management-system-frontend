import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatch, mapState } from './signIn.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import DialogComponent from '../../components/dialog';
import {
  VARIANT_H6,
  VARIANT_BODY1,
  TEXT_SIGN_IN,
} from '../../constants/typography.constant';
import { COLOR_PRIMARY } from '../../constants/color.constant';
import { VARIANT_BUTTON_CONTAINED } from '../../constants/button.constant';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      open: false,
      setOpen: false,
      message: '',
    };
  }

  dialogActions = () => {
    return (
      <div>
        <Button
          color={COLOR_PRIMARY}
          childElement="Ok"
          variant={VARIANT_BUTTON_CONTAINED}
          onClickFunction={() => this.handleCloseModal()}
        />
      </div>
    );
  };

  dialogBody = () => {
    const { message } = this.state;

    return <Typography variant={VARIANT_BODY1} text={message} />;
  };

  handleOpenModal = message => {
    this.setState({ setOpen: true, open: true, message });
  };

  handleCloseModal = () => {
    this.setState({ open: false, setOpen: false, message: '' });
  };

  handleChange = (name, event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { userSignIn } = this.props;

    if (!email) {
      return this.handleOpenModal("Email can't be empty");
    }
    if (!password) {
      return this.handleOpenModal("Password can't be empty");
    }
    userSignIn({ email, password });
  };

  componentWillReceiveProps = nextProps => {
    const { userResetMessage } = this.props;
    const { message } = nextProps;
    if (message === 'error') {
      this.handleOpenModal('Please check your username or password');
      userResetMessage();
    }
  };

  render() {
    const { email, password } = this.state;
    const childElement = (
      <div style={{ textAlign: 'center' }}>
        <Typography variant={VARIANT_H6} text={TEXT_SIGN_IN} />
        <TextField
          id="email"
          label="Email"
          value={email}
          type="email"
          onChangeFunction={e => this.handleChange('email', e)}
          onKeyPressFunction={e => this.handleSubmitOnEnter(e)}
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          type="password"
          onChangeFunction={e => this.handleChange('password', e)}
          onKeyPressFunction={e => this.handleSubmitOnEnter(e)}
        />
        <Button
          color={COLOR_PRIMARY}
          childElement={TEXT_SIGN_IN}
          variant={VARIANT_BUTTON_CONTAINED}
          onClickFunction={() => this.handleSubmit()}
        />
      </div>
    );
    return (
      <div style={{ width: '30%', margin: 'auto', marginTop: '2em' }}>
        <Paper childElement={childElement} />
        <DialogComponent
          handleClose={this.handleCloseModal}
          open={this.state.open}
          id="task-modal"
          title="Sign In"
          actions={this.dialogActions()}
          body={this.dialogBody()}
        />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignIn);
