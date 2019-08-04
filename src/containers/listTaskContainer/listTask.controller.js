import { createTask, fetchTask } from '../../redux/action/task.action';

export const mapState = state => {
  return {
    // tasks: state.task.tasks,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    createTask: data => dispatch(createTask(data)),
    fetchTask: data => dispatch(fetchTask(data)),
  };
};
