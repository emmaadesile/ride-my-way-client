import { LOGOUT_USER, SET_CURRENT_USER } from '../actionTypes/auth';

export const logout = () => ({
  type: LOGOUT_USER
})

export const logOutUser = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  dispatch(logout());
};

export const setLoggedInUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
