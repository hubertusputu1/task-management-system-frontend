import {
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILED,
} from '../type/user.type';

const initialState = {
  loading: true,
  user: {},
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case USER_SIGN_UP_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        user: action.payload.user,
      };
    case USER_SIGN_IN_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
