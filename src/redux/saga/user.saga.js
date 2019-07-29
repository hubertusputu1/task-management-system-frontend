import { put, call } from 'redux-saga/effects';
import { USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAILED } from '../type/user.type';
import { createUserAPI } from './api/user.api';

export function* createUser(action) {
  try {
    yield call(createUserAPI, action.payload);
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
