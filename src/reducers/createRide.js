import {
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_ERROR
} from "../actionTypes/createRide";

import initialState from "../store/initialState";

const createRide = (state = initialState.createRide, action) => {
  switch (action.type) {
    case CREATE_RIDE_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case CREATE_RIDE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case CREATE_RIDE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default createRide;
