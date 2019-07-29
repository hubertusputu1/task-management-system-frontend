import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';

import { mapDispatch, mapState } from './signUp.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Select from '../../components/select';
import { VARIANT_H6, TEXT_SIGN_UP } from '../../constants/typography.constant';
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
    };
  }

  handleChange = (name, event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleSubmit = () => {
    const { name, email, password, confirmPassword, userRole } = this.state;
    const { createUser } = this.props;

    if (!name || !email || !password || !confirmPassword) {
      return alert("all fields can't be empty");
    }
    if (!EmailValidator.validate(email)) {
      return alert('email must be valid');
    }
    if (password !== confirmPassword) {
      return alert("password doesn't match");
    }
    createUser({ name, email, password, userRole });
    alert('user created');
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
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignUp);
