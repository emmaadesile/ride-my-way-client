import axios from "axios";
import jwtDecode from "jwt-decode";

import {
  SIGNIN_SUCCESS,
  SIGNIN_LOADING,
  SIGNIN_ERROR
} from "../actionTypes/signin";

const API = process.env.REACT_APP_API;

const signinSuccess = body => ({
  type: SIGNIN_SUCCESS,
  payload: body
});

const signinError = error => ({
  type: SIGNIN_ERROR,
  payload: error
});

const signinLoading = isLoading => ({
  type: SIGNIN_LOADING,
  payload: isLoading
});

const signin = user => dispatch => {
  dispatch(signinLoading(true));
  return axios
    .post("http://localhost:8000/auth/signin", user, {
      headers: {
        "Content-Types": "application/json"
      }
    })
    .then(response => {
      localStorage.setItem("token", response.data.userToken);
      localStorage.setItem("user", JSON.stringify(jwtDecode(response.data.userToken)));
      dispatch(signinSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(signinLoading(false));
      if (error.response) {
        return dispatch(signinError(error.response.data));
      }
      return dispatch(
        signinError("Server unreachable at the moment. Please again later")
      );
    });
};

export default signin;