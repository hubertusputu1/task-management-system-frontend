import { all, takeLatest } from 'redux-saga/effects';

import { USER_SIGN_UP, USER_SIGN_IN, USER_SIGN_OUT } from '../type/user.type';
import {
  TASK_CREATE,
  TASK_DELETE,
  TASK_EDIT,
  TASK_FETCH,
} from '../type/task.type';
import { userSignUp, userSignIn, userSignOut } from '../saga/user.saga';
import { createTask, editTask, deleteTask, fetchTask } from '../saga/task.saga';

export default function* IndexSaga() {
  yield all([
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_SIGN_IN, userSignIn),
    takeLatest(USER_SIGN_OUT, userSignOut),
    takeLatest(TASK_FETCH, fetchTask),
    takeLatest(TASK_CREATE, createTask),
    takeLatest(TASK_EDIT, editTask),
    takeLatest(TASK_DELETE, deleteTask),
  ]);
}
