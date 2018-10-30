import * as types from "../actionTypes/signup";
import initialState from "../store/initialState";

const signup = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case types.SIGNUP_LOADING:
      return {
        state,
        loading: action.paylaod,
        error: ""
      };
    case types.SIGNUP_ERROR:
      return {
        state,
        error: action.payload
      };
    case types.SIGNUP_SUCCESS:
      return {
        state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default signup;
