import {
  FETCH_RIDE_REQUESTS_ERROR,
  FETCH_RIDE_REQUESTS_LOADING,
  FETCH_RIDE_REQUESTS_SUCCESS
} from "../actionTypes/rideRequests";
import initialState from "../store/initialState";

const fetchRideRequests = (state = initialState.rideRequests, action) => {
  switch (action.type) {
    case FETCH_RIDE_REQUESTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_RIDE_REQUESTS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case FETCH_RIDE_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload
      }
    default:
      return state;
  }
}

export default fetchRideRequests;
