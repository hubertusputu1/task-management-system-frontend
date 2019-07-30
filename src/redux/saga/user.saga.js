import { put, call } from 'redux-saga/effects';
import {
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILED,
} from '../type/user.type';
import { userSignUpAPI, userSignInAPI } from './api/user.api';

export function* userSignUp(action) {
  try {
    yield call(userSignUpAPI, action.payload);
    yield put({
      type: USER_SIGN_UP_SUCCESS,
      payload: { message: 'success' },
    });
  } catch (error) {
    yield put({
      type: USER_SIGN_UP_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* userSignIn(action) {
  try {
    const resultSignInAPI = yield call(userSignInAPI, action.payload);
    yield put({
      type: USER_SIGN_IN_SUCCESS,
      payload: { message: 'success', user: resultSignInAPI.user },
    });
  } catch (error) {
    yield put({
      type: USER_SIGN_IN_FAILED,
      payload: { message: 'error' },
    });
  }
}
