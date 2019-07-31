import {
  TASK_CREATE,
  TASK_FETCH,
  TASK_EDIT,
  TASK_DELETE,
} from '../type/task.type';

export const fetchTask = data => {
  return {
    type: TASK_FETCH,
    payload: data,
  };
};

export const createTask = data => {
  return {
    type: TASK_CREATE,
    payload: data,
  };
};

export const editTask = data => {
  return {
    type: TASK_EDIT,
    payload: data,
  };
};

export const deleteTask = data => {
  return {
    type: TASK_DELETE,
    payload: data,
  };
};
