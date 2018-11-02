import {
  FETCH_RIDE_REQUESTS_ERROR,
  FETCH_RIDE_REQUESTS_LOADING,
  FETCH_RIDE_REQUESTS_SUCCESS
} from "../actionTypes/rideRequests";
import axios from "axios";

const fetchRideRequestsSuccess = requests => ({
  type: FETCH_RIDE_REQUESTS_SUCCESS,
  payload: requests
});

const fetchRideRequestsLoading = isLoading => ({
  type: FETCH_RIDE_REQUESTS_LOADING,
  payload: isLoading
});

const fetchRideRequestsError = error => ({
  type: FETCH_RIDE_REQUESTS_ERROR,
  payload: error
});

const fetchRideRequests = () => dispatch => {
  dispatch(fetchRideRequestsLoading(true));

  const { token } = localStorage;

  return axios
    .get(`${__API__}/users/rides/:rideId/requests`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`
      }
    })
    .then(response => {
      dispatch(fetchRideRequestsLoading(false));
      if (response.data.status === "Success") {
        dispatch(fetchRideRequestsSuccess(response.data.requests));
      }
      return response;
    })
    .catch(error => {
      dispatch(fetchRideRequestsLoading(false));
      if (error.reponse) {
        dispatch(fetchRideRequestsError(error.response.error));
      }
      return dispatch(fetchRideRequestsError("Server is currently unavailable. Try again later"));
    });
};

export default fetchRideRequests;
