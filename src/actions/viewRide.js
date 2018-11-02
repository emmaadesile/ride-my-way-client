import axios from "axios";
import {
  VIEW_RIDE_ERROR,
  VIEW_RIDE_LOADING,
  VIEW_RIDE_SUCCESS
} from "../actionTypes/viewRide";

const viewRideSuccess = ride => ({
  type: VIEW_RIDE_SUCCESS,
  payload: ride
});

const viewRideLoading = isLoading => ({
  type: VIEW_RIDE_LOADING,
  payload: isLoading
});

const viewRideError = error => ({
  type: VIEW_RIDE_ERROR,
  payload: error
});

const viewRide = rideid => dispatch => {
  const { token } = localStorage;
  dispatch(viewRideLoading(true));
  return axios
    .get(`http://localhost:8000/rides/${rideid}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`
      }
    })
    .then(response => {
      dispatch(viewRideLoading(false));
      if (response.data.status === "Success") {
        dispatch(viewRideSuccess(response.data.ride));
      }
      return response;
    })
    .catch(error => {
      dispatch(viewRideLoading(false));
      if (error.response) {
        dispatch(viewRideError(error.response.data.error));
      }
      return dispatch(
        viewRideError(
          "Server is unreachable at the moment. Please try again later"
        )
      );
    });
};

export default viewRide;
