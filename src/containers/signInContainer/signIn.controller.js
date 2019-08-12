import { userSignIn, userResetMessage } from '../../redux/action/user.action';

export const mapState = state => {
  return {
    message: state.user.message,
  };
};

export const mapDispatch = (dispatch, props) => {
  return {
    userSignIn: data => dispatch(userSignIn(data)),
    userResetMessage: () => dispatch(userResetMessage()),
  };
};
