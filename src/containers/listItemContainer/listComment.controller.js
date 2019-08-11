import { fetchComment } from '../../redux/action/comment.action';

export const mapState = state => {
  return {
    comments: state.comment.comments,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    fetchComment: data => dispatch(fetchComment(data)),
  };
};
