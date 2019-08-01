import {
  COMMENT_CREATE,
  COMMENT_FETCH,
  COMMENT_DELETE,
} from '../type/comment.type';

export const fetchComment = data => {
  return {
    type: COMMENT_FETCH,
    payload: data,
  };
};

export const createComment = data => {
  return {
    type: COMMENT_CREATE,
    payload: data,
  };
};

export const deleteComment = data => {
  return {
    type: COMMENT_DELETE,
    payload: data,
  };
};
