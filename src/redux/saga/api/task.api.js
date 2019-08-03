import axios from 'axios';
import { ApiUrl, HeaderToken } from './util';

export const taskFetchAPI = payload => {
  const { token } = payload;
  return axios
    .get(ApiUrl('api/v1/tasks'), HeaderToken(token))
    .then(res => res.data);
};

export const taskCreateAPI = payload => {
  const { title, description, createdBy, status, assignedTo, token } = payload;
  return axios
    .post(
      ApiUrl('api/v1/tasks'),
      {
        task: {
          title,
          description,
          createdBy,
          status,
          assignedTo,
        },
      },
      HeaderToken(token)
    )
    .then(res => res.data);
};

export const taskEditAPI = payload => {
  const { _id, title, description, assignedTo, status, token } = payload;
  return axios
    .put(
      ApiUrl(`api/v1/tasks/${_id}`),
      {
        task: {
          title,
          description,
          assignedTo,
          status,
        },
      },
      HeaderToken(token)
    )
    .then(res => res.data);
};

export const taskDeleteAPI = payload => {
  const { _id, token } = payload;
  return axios
    .delete(ApiUrl(`api/v1/tasks/${_id}`), {}, HeaderToken(token))
    .then(res => res.data);
};

export const taskGetSingleAPI = payload => {
  const { _id, token } = payload;
  return axios
    .get(ApiUrl(`api/v1/tasks/${_id}`), HeaderToken(token))
    .then(res => res.data);
};
