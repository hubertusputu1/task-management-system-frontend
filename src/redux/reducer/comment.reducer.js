import _ from 'lodash';

import {
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_FETCH,
  COMMENT_CREATE_FAILED,
  COMMENT_CREATE_SUCCESS,
  COMMENT_DELETE_FAILED,
  COMMENT_DELETE_SUCCESS,
  COMMENT_FETCH_FAILED,
  COMMENT_FETCH_SUCCESS,
} from '../type/comment.type';

const initialState = {
  loading: false,
  comments: [],
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.concat(action.payload.comment),
        message: action.payload.message,
      };
    case COMMENT_CREATE_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case COMMENT_DELETE:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_DELETE_SUCCESS:
      let deletedcomment = _.remove(state.comments, comment => {
        return comment._id !== action.payload._id;
      });
      return {
        ...state,
        loading: false,
        comments: deletedcomment,
        message: action.payload.message,
      };
    case COMMENT_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case COMMENT_FETCH:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
        message: action.payload.message,
      };
    case COMMENT_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
