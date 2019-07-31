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

const initialState = {
  loading: false,
  task: [],
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
