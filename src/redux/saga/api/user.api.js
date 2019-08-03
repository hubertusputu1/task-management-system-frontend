import axios from 'axios';
import { ApiUrl, HeaderToken } from './util';

export const userSignUpAPI = payload => {
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

export const userSignInAPI = payload => {
  const { email, password } = payload;
  return axios
    .post(ApiUrl('api/v1/users/signin'), {
      user: {
        email,
        password,
      },
    })
    .then(res => res.data);
};

export const userFetchAPI = payload => {
  const { token } = payload;
  return axios
    .get(ApiUrl('api/v1/users'), HeaderToken(token))
    .then(res => res.data);
};
