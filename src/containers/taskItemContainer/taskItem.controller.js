import { deleteTask, editTask } from '../../redux/action/task.action';

export const mapState = state => {
  return {
    users: state.user.users,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    deleteTask: data => dispatch(deleteTask(data)),
    editTask: data => dispatch(editTask(data)),
  };
};
