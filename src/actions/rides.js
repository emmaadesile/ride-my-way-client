import axios from "axios";

import {
  FETCH_ALL_RIDES_LOADING,
  FETCH_ALL_RIDES_SUCCESS,
  FETCH_ALL_RIDES_ERROR
} from "../actionTypes/rides";

const fetchAllRidesLoading = isLoading => ({
  type: FETCH_ALL_RIDES_LOADING,
  payload: isLoading
});

const fetchAllRidesSuccess = rides => ({
  type: FETCH_ALL_RIDES_SUCCESS,
  payload: rides
});

const fetchAllRidesError = error => ({
  type: FETCH_ALL_RIDES_ERROR,
  payload: error
});

const fetchAllRides = () => dispatch => {
  dispatch(fetchAllRidesLoading(true));
  const { token } = localStorage;

  return axios
    .get(`${__API__}/rides`, {
      headers: {
        "x-access-token": `${token}`,
        "Content-Types": "application/json"
      }
    })
    .then(response => {
      dispatch(fetchAllRidesLoading(false));
      if (response.data.status === "Success") {
        dispatch(fetchAllRidesSuccess(response.data.rides));
      }
      return response;
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchAllRidesLoading(false));
      if (error.response) {
        dispatch(fetchAllRidesError(error.response.data));
      }
      return dispatch(
        fetchAllRidesError("The request to get all rides failed")
      );
    });
};

export default fetchAllRides;
