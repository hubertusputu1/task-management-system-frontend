import { createTask } from '../../redux/action/task.action';

export const mapState = state => {
  return {};
};

export const mapDispatch = (dispatch, props) => {
  return {
    createTask: data => dispatch(createTask(data)),
  };
};
