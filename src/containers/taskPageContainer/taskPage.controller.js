import {
  createTask,
  deleteTask,
  fetchTask,
  editTask,
} from '../../redux/action/task.action';

export const mapState = state => {
  return {
    tasks: state.task.tasks,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    createTask: data => dispatch(createTask(data)),
    deleteTask: data => dispatch(deleteTask(data)),
    fetchTask: data => dispatch(fetchTask(data)),
    editTask: data => dispatch(editTask(data)),
  };
};
