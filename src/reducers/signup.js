import {
  SIGNUP_SUCCESS,
  SIGNUP_LOADING,
  SIGNUP_ERROR
} from "../actionTypes/signup";
import initialState from "../store/initialState";

const signup = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: ""
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default signup;
