import jwtDecode from "jwt-decode";

import {
  SIGNUP_SUCCESS,
  SIGNUP_LOADING,
  SIGNUP_ERROR
} from "../actionTypes/signup";
import axios from "axios";

const signupLoading = isLoading => ({
  type: SIGNUP_LOADING,
  payload: isLoading
});

const signupSuccess = body => ({
  type: SIGNUP_SUCCESS,
  payload: body
});

const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error
});

const signup = user => dispatch => {
  dispatch(signupLoading(true));
  return axios
    .post("http://localhost:8000/auth/signup", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.data.status === "Success") {
        dispatch(signupLoading(false));
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(jwtDecode(token)));
        dispatch(signupSuccess(response.data.message));
      }
    })
    .catch(error => {
      dispatch(signupLoading(false));
      if (error.response) {
        return dispatch(signupError(error.response.data));
      }
      return dispatch(
        signupError({
          error: "An error occured on the server. Please try again"
        })
      );
    });
};

export default signup;
