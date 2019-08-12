import { deleteComment } from '../../redux/action/comment.action';

export const mapState = state => {
  return {};
};

export const mapDispatch = (dispatch, props) => {
  return {
    deleteComment: data => dispatch(deleteComment(data)),
  };
};
