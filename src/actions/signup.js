import * as types from "../actionTypes/signup";
import axios from "axios";
import jwtDecode from "jwt-decode";

const API = process.env.REACT_APP_API;

const signUpLoading = isLoading => ({
  type: types.SIGNUP_LOADING,
  payload: isLoading
});

const signupSuccess = body => ({
  type: types.SIGNUP_SUCCESS,
  payload: body
});

const signupLoading = isLoading => ({
  type: types.SIGNUP_LOADING,
  payload: isLoading
});

const signupError = error => ({
  type: types.SIGNUP_ERROR,
  payload: error
});

const signup = user => dispatch => {
  dispatch(signUpLoading(true));
  axios
    .post("http://localhost:8000/auth/signup", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response);
      if (response.data.status === "Success") {
        console.log(response.data)
        dispatch(signupLoading(false));
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", jwtDecode(token));
        dispatch(signupSuccess(response.data));
      }
    })
    .catch(error => {
      dispatch(signupLoading(false));
      if (error.response) {
        // console.log(error.response);
        return dispatch(signupError(error.response.data));
      }
      console.log(error);
      return dispatch(
        signupError({
          error: "An error occured on the server. Pleas try again"
        })
      );
    });
};

export default signup;
