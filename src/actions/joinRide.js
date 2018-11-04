import {
  JOIN_RIDE_ERROR,
  JOIN_RIDE_LOADING,
  JOIN_RIDE_SUCCESS
} from "../actionTypes/joinRide";
import axios from "axios";

const joinRideLoading = isLoading => ({
  type: JOIN_RIDE_LOADING,
  payload: isLoading
});

const joinRideSuccess = message => ({
  type: JOIN_RIDE_SUCCESS,
  payload: message
});

const joinRideError = error => ({
  type: JOIN_RIDE_ERROR,
  payload: error
});

const joinRide = rideid => dispatch => {
  dispatch(joinRideLoading(true));
  const { token } = localStorage;

  return axios
    .post(
      `${__API__}/rides/${rideid}/requests`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`
        }
      }
    )
    .then(response => {
      dispatch(joinRideLoading(false));
      if (response.data.status === "Success") {
        dispatch(joinRideSuccess(response.data.message));
      }
      return response;
    })
    .catch(error => {
      if (error.response) {
        dispatch(joinRideLoading(false));
        return dispatch(joinRideError(error.response.error));
      }
      if (error === undefined) {
        return dispatch(joinRideError("You can only join the ride once"));
      }
      return dispatch(
        joinRideError(
          "Server uncreachable at the moment. Please try again later"
        )
      );
    });
};

export const clearMessage = () => ({
  type: "CLEAR_RIDE_REQUEST_MESSAGE"
});

export default joinRide;
