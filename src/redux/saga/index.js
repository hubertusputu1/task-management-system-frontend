import { all, takeLatest } from 'redux-saga/effects';

import { USER_SIGN_UP } from '../type/user.type';
import { createUser } from '../saga/user.saga';

export default function* IndexSaga() {
  yield all([takeLatest(USER_SIGN_UP, createUser)]);
}
