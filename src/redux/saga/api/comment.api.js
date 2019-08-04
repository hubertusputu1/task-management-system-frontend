import axios from 'axios';
import { ApiUrl, HeaderToken } from './util';

export const commentFetchAPI = payload => {
  const { token, taskId } = payload;
  return axios
    .get(ApiUrl(`api/v1/comments?taskId=${taskId}`), HeaderToken(token))
    .then(res => res.data);
};

export const commentCreateAPI = payload => {
  const { userId, taskId, text, token } = payload;
  return axios
    .post(
      ApiUrl('api/v1/comments'),
      {
        comment: {
          userId,
          taskId,
          text,
        },
      },
      HeaderToken(token)
    )
    .then(res => res.data);
};

export const commentDeleteAPI = payload => {
  const { _id, token } = payload;
  return axios
    .delete(ApiUrl(`api/v1/comments/${_id}`), HeaderToken(token))
    .then(res => res.data);
};
