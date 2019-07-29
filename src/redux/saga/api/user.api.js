import axios from 'axios';
import { ApiUrl, HeaderToken } from './util';

export const createUserAPI = payload => {
  const { name, email, password, userRole } = payload;
  return axios
    .post(ApiUrl('api/v1/users'), {
      user: {
        name,
        email,
        password,
        userRole,
      },
    })
    .then(res => res.data);
};
