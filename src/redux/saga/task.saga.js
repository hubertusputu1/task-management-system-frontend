import { put, call } from 'redux-saga/effects';
import {
  TASK_CREATE_FAILED,
  TASK_CREATE_SUCCESS,
  TASK_DELETE_FAILED,
  TASK_DELETE_SUCCESS,
  TASK_EDIT_FAILED,
  TASK_EDIT_SUCCESS,
  TASK_FETCH_FAILED,
  TASK_FETCH_SUCCESS,
} from '../type/task.type';
import {
  taskCreateAPI,
  taskDeleteAPI,
  taskEditAPI,
  taskFetchAPI,
  taskGetSingleAPI,
} from './api/task.api';

export function* createTask(action) {
  // try {
  //   yield call(taskCreateAPI, action.payload);
  //   yield put({
  //     type: USER_SIGN_UP_SUCCESS,
  //     payload: { message: 'success' },
  //   });
  // } catch (error) {
  //   yield put({
  //     type: USER_SIGN_UP_FAILED,
  //     payload: { message: 'error' },
  //   });
  // }
}

export function* deleteTask(action) {}

export function* editTask(action) {}

export function* fetchTask(action) {}

export function* getSingleTask(action) {}
