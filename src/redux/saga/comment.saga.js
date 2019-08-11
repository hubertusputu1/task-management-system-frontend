import { put, call } from 'redux-saga/effects';
import {
  COMMENT_CREATE_FAILED,
  COMMENT_CREATE_SUCCESS,
  COMMENT_DELETE_FAILED,
  COMMENT_DELETE_SUCCESS,
  COMMENT_FETCH_FAILED,
  COMMENT_FETCH_SUCCESS,
} from '../type/comment.type';
import {
  commentCreateAPI,
  commentDeleteAPI,
  commentFetchAPI,
} from './api/comment.api';

export function* createComment(action) {
  try {
    const newComment = yield call(commentCreateAPI, action.payload);
    yield put({
      type: COMMENT_CREATE_SUCCESS,
      payload: { message: 'success', comment: newComment.comment },
    });
  } catch (error) {
    yield put({
      type: COMMENT_CREATE_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* deleteComment(action) {
  try {
    yield call(commentDeleteAPI, action.payload);
    yield put({
      type: COMMENT_DELETE_SUCCESS,
      payload: { message: 'success', _id: action.payload._id },
    });
  } catch (error) {
    yield put({
      type: COMMENT_DELETE_FAILED,
      payload: { message: 'error' },
    });
  }
}

export function* fetchComment(action) {
  try {
    const comments = yield call(commentFetchAPI, action.payload);
    yield put({
      type: COMMENT_FETCH_SUCCESS,
      payload: { message: 'success', comments: comments.comments },
    });
  } catch (error) {
    yield put({
      type: COMMENT_FETCH_FAILED,
      payload: { message: 'error' },
    });
  }
}
