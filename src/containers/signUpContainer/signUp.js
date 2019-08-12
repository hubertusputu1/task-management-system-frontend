import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';

import { mapDispatch, mapState } from './signUp.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Select from '../../components/select';
import DialogComponent from '../../components/dialog';
import {
  VARIANT_H6,
  VARIANT_BODY1,
  TEXT_SIGN_UP,
} from '../../constants/typography.constant';
import { PATH_SIGN_IN } from '../../constants/path.constant';
import { COLOR_PRIMARY } from '../../constants/color.constant';
import { VARIANT_BUTTON_CONTAINED } from '../../constants/button.constant';
import {
  USER_ROLES_ADMIN,
  USER_ROLES_EMPLOYEE,
} from '../../constants/user.constant';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userRole: USER_ROLES_ADMIN,
      setOpen: false,
      open: false,
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

  handleSubmit = () => {
    const { name, email, password, confirmPassword, userRole } = this.state;
    const { userSignUp } = this.props;

    if (!name || !email || !password || !confirmPassword) {
      return this.handleOpenModal("all fields can't be empty");
    }
    if (!EmailValidator.validate(email)) {
      return this.handleOpenModal('email must be valid');
    }
    if (password !== confirmPassword) {
      return this.handleOpenModal("password doesn't match");
    }
    userSignUp({ name, email, password, userRole });
    this.handleOpenModal('User Created', true);
    setTimeout(() => this.props.history.push(PATH_SIGN_IN), 1000);
  };

  render() {
    const { email, password, name, confirmPassword, userRole } = this.state;
    const userRoles = [
      {
        value: USER_ROLES_ADMIN,
        name: USER_ROLES_ADMIN,
      },
      {
        value: USER_ROLES_EMPLOYEE,
        name: USER_ROLES_EMPLOYEE,
      },
    ];

    const childElement = (
      <div style={{ textAlign: 'center' }}>
        <Typography variant={VARIANT_H6} text={TEXT_SIGN_UP} />
        <TextField
          id="name"
          label="Name"
          value={name}
          onChangeFunction={e => this.handleChange('name', e)}
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          type="email"
          onChangeFunction={e => this.handleChange('email', e)}
        />
        <Select
          id="userRole"
          name="User Role"
          value={userRole}
          onChangeFunction={e => this.handleChange('userRole', e)}
          menuItems={userRoles}
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          type="password"
          onChangeFunction={e => this.handleChange('password', e)}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          onChangeFunction={e => this.handleChange('confirmPassword', e)}
        />
        <Button
          color={COLOR_PRIMARY}
          childElement={TEXT_SIGN_UP}
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
          title="Sign Up"
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
)(SignUp);
