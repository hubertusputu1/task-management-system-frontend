import { USER_SIGN_UP, USER_SIGN_IN, USER_SIGN_OUT } from '../type/user.type';

export const userSignUp = data => {
  return {
    type: USER_SIGN_UP,
    payload: data,
  };
};

export const userSignIn = data => {
  return {
    type: USER_SIGN_IN,
    payload: data,
  };
};

export const userSignOut = data => {
  return {
    type: USER_SIGN_OUT,
    payload: data,
  };
};
