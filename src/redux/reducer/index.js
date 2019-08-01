import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user.reducer';
import task from './task.reducer';
import comment from './comment.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: user,
    task: task,
    comment: comment,
  });
