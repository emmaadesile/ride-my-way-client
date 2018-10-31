import {
  SIGNIN_SUCCESS,
  SIGNIN_LOADING,
  SIGNIN_ERROR
} from "../actionTypes/signin";
import initialState from "../store/initialState";

const signin = (state = initialState.auth.signin, action) => {
  switch (action.type) {
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default signin;