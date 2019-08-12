import { deleteComment } from '../../redux/action/comment.action';

export const mapState = state => {
  return {
    users: state.user.users,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    deleteComment: data => dispatch(deleteComment(data)),
  };
};
