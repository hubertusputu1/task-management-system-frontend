import { all, takeLatest } from 'redux-saga/effects';

import { USER_SIGN_UP, USER_SIGN_IN } from '../type/user.type';
import { userSignUp, userSignIn } from '../saga/user.saga';

export default function* IndexSaga() {
  yield all([
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_SIGN_IN, userSignIn),
  ]);
}
