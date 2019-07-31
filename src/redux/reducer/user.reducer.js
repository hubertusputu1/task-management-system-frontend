import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  USER_SIGN_IN,
  USER_SIGN_OUT,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILED,
  USER_SIGN_OUT_SUCCESS,
  USER_SIGN_OUT_FAILED,
} from '../type/user.type';

const initialState = {
  loading: false,
  user: {},
  message: null,
};

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

export default persistReducer(persistConfig, (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        loading: true,
      };
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
    case USER_SIGN_IN:
      return {
        ...state,
        loading: true,
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
    case USER_SIGN_OUT:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        user: action.payload.user,
      };
    case USER_SIGN_OUT_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
});
