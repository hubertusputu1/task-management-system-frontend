import { put, call } from 'redux-saga/effects';
import {
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILED,
  USER_SIGN_OUT_SUCCESS,
  USER_SIGN_OUT_FAILED,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED,
} from '../type/user.type';
import { userSignUpAPI, userSignInAPI, userFetchAPI } from './api/user.api';

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

export function* userFetch(action) {
  try {
    const users = yield call(userFetchAPI, action.payload);
    yield put({
      type: USER_FETCH_SUCCESS,
      payload: { message: 'success', users: users.users },
    });
  } catch (error) {
    yield put({
      type: USER_FETCH_FAILED,
      payload: { message: 'error' },
    });
  }
}

// export function* userFetch(action) {
//   try {
//     const resultSignInAPI = yield call(userSignInAPI, action.payload);
//     yield put({
//       type: USER_SIGN_IN_SUCCESS,
//       payload: { message: 'success', user: resultSignInAPI.user },
//     });
//   } catch (error) {
//     yield put({
//       type: USER_SIGN_IN_FAILED,
//       payload: { message: 'error' },
//     });
//   }
// }

export function* userSignOut(action) {
  try {
    yield put({
      type: USER_SIGN_OUT_SUCCESS,
      payload: { message: 'success', user: {} },
    });
  } catch (error) {
    yield put({
      type: USER_SIGN_OUT_FAILED,
      payload: { message: 'error' },
    });
  }
}
