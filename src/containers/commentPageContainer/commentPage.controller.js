import {
  createComment,
  deleteComment,
  fetchComment,
} from '../../redux/action/comment.action';

export const mapState = state => {
  return {
    comments: state.comment.comments,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    createComment: data => dispatch(createComment(data)),
    deleteComment: data => dispatch(deleteComment(data)),
    fetchComment: data => dispatch(fetchComment(data)),
  };
};
