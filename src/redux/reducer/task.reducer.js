import _ from 'lodash';

import {
  TASK_CREATE,
  TASK_DELETE,
  TASK_EDIT,
  TASK_FETCH,
  TASK_CREATE_FAILED,
  TASK_CREATE_SUCCESS,
  TASK_DELETE_FAILED,
  TASK_DELETE_SUCCESS,
  TASK_EDIT_FAILED,
  TASK_EDIT_SUCCESS,
  TASK_FETCH_FAILED,
  TASK_FETCH_SUCCESS,
} from '../type/task.type';

const initialState = {
  loading: false,
  task: [],
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TASK_CREATE:
      return {
        ...state,
        loading: true,
      };
    case TASK_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        task: state.task.concat(action.payload.task),
        message: action.payload.message,
      };
    case TASK_CREATE_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case TASK_DELETE:
      return {
        ...state,
        loading: true,
      };
    case TASK_DELETE_SUCCESS:
      let deletedTask = _.remove(state.task, task => {
        return task._id !== action.payload._id;
      });
      return {
        ...state,
        loading: false,
        task: deletedTask,
        message: action.payload.message,
      };
    case TASK_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case TASK_EDIT:
      return {
        ...state,
        loading: true,
      };
    case TASK_EDIT_SUCCESS:
      let editedTask = _.remove(state.task, task => {
        return task._id !== action.payload.task._id;
      });
      return {
        ...state,
        loading: false,
        task: editedTask.concat(action.payload.task),
        message: action.payload.message,
      };
    case TASK_EDIT_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case TASK_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TASK_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        task: action.payload.tasks,
        message: action.payload.message,
      };
    case TASK_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
