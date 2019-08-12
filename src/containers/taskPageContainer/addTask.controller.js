import { createTask } from '../../redux/action/task.action';

export const mapState = state => {
  return { users: state.user.users };
};

export const mapDispatch = (dispatch, props) => {
  return {
    createTask: data => dispatch(createTask(data)),
  };
};
