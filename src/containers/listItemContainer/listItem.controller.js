import { deleteTask } from '../../redux/action/task.action';

export const mapState = state => {
  return {};
};

export const mapDispatch = (dispatch, props) => {
  return {
    deleteTask: data => dispatch(deleteTask(data)),
  };
};
