export const ApiUrl = path => `${process.env.REACT_APP_API_HOST}/${path}`;
export const HeaderToken = token =>
  Object.assign({
    headers: { Authorization: 'Token ' + token },
  });
