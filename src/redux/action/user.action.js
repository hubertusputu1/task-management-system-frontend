import { USER_SIGN_UP, USER_SIGN_IN } from '../type/user.type';

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
