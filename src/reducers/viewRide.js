import {
  VIEW_RIDE_ERROR,
  VIEW_RIDE_LOADING,
  VIEW_RIDE_SUCCESS
} from "../actionTypes/viewRide";

import initialState from "../store/initialState";

const viewRide = (state = initialState.viewRide, action) => {
  switch (action.type) {
    case VIEW_RIDE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case VIEW_RIDE_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case VIEW_RIDE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default viewRide;
