import {
  JOIN_RIDE_ERROR,
  JOIN_RIDE_LOADING,
  JOIN_RIDE_SUCCESS
} from "../actionTypes/joinRide";

import initialState from "../store/initialState";

const joinRide = (state = initialState.joinRide, action) => {
  switch (action.type) {
    case JOIN_RIDE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case JOIN_RIDE_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case JOIN_RIDE_ERROR:
      if (typeof action.payload === undefined) {
        return {
          ...state,
          error: "You can only request to join the ride once"
        };
      }
      return {
        ...state,
        error: action.payload
      };
    case "CLEAR_RIDE_REQUEST_MESSAGE":
      return {
        ...state,
        message: ""
      };
    default:
      return state;
  }
};

export default joinRide;
