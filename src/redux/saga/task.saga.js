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
} from './api/task.api';

export function* createTask(action) {
  try {
    const newTask = yield call(taskCreateAPI, action.payload);
    yield put({
      type: TASK_CREATE_SUCCESS,
      payload: { message: 'success', task: newTask.task },
    });
  } catch (error) {
    yield put({
      type: TASK_CREATE_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* deleteTask(action) {
  try {
    yield call(taskDeleteAPI, action.payload);
    yield put({
      type: TASK_DELETE_SUCCESS,
      payload: { message: 'success', _id: action.payload._id },
    });
  } catch (error) {
    yield put({
      type: TASK_DELETE_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* editTask(action) {
  try {
    yield call(taskEditAPI, action.payload);
    let task = action.payload;
    delete task.token;
    yield put({
      type: TASK_EDIT_SUCCESS,
      payload: { message: 'success', task },
    });
  } catch (error) {
    yield put({
      type: TASK_EDIT_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* fetchTask(action) {
  try {
    const tasks = yield call(taskFetchAPI, action.payload);
    yield put({
      type: TASK_FETCH_SUCCESS,
      payload: { message: 'success', tasks },
    });
  } catch (error) {
    yield put({
      type: TASK_FETCH_FAILED,
      payload: { message: 'error' },
    });
  }
}
