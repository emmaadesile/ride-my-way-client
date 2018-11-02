import axios from "axios";
import {
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_ERROR
} from "../actionTypes/createRide";

const createRideSuccess = message => ({
  type: CREATE_RIDE_SUCCESS,
  payload: message
});

const createRideLoading = isLoading => ({
  type: CREATE_RIDE_LOADING,
  payload: isLoading
});

const createRideError = error => ({
  type: CREATE_RIDE_ERROR,
  payload: error
});

const createRide = rideData => dispatch => {
  const { token } = localStorage;

  dispatch(createRideLoading(true));

  return axios
    .post(`${__API__}/users/rides`, rideData, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`
      }
    })
    .then(response => {
      dispatch(createRideLoading(false));
      if (response.data.status === "Success") {
        dispatch(createRideSuccess(response.data.message));
      }
      return response;
    })
    .catch(error => {
      dispatch(createRideLoading(false));
      if (error.response) {
        dispatch(createRideError(error.response.error));
      }
      return dispatch(createRideError("Server unreachable at the moment"));
    });
};

export default createRide;
