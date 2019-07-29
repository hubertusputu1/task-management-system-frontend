import { USER_SIGN_UP } from '../type/user.type';

export const createUser = data => {
  return {
    type: USER_SIGN_UP,
    payload: data,
  };
};
