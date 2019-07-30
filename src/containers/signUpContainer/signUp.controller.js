import { userSignUp } from '../../redux/action/user.action';

export const mapState = state => {
  return {
    message: state.user.message,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    userSignUp: data => dispatch(userSignUp(data)),
  };
};
