import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatch, mapState } from './signIn.controller';

import Paper from '../../components/paper';
import TextField from '../../components/textField';
import Typography from '../../components/typography';
import Button from '../../components/button';
import { VARIANT_H6, TEXT_SIGN_IN } from '../../constants/typography.constant';
import { COLOR_PRIMARY } from '../../constants/color.constant';
import { VARIANT_BUTTON_CONTAINED } from '../../constants/button.constant';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

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
      return alert("email can't be empty");
    }
    if (!password) {
      return alert("password can't be empty");
    }
    userSignIn({ email, password });
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
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignIn);
