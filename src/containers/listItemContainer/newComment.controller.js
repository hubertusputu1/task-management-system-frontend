import { createComment, fetchComment } from '../../redux/action/comment.action';

export const mapState = state => {
  return {};
};

export const mapDispatch = (dispatch, props) => {
  return {
    fetchComment: data => dispatch(fetchComment(data)),
    createComment: data => dispatch(createComment(data)),
  };
};
