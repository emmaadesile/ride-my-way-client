import {
  FETCH_ALL_RIDES_LOADING,
  FETCH_ALL_RIDES_SUCCESS,
  FETCH_ALL_RIDES_ERROR,
} from "../actionTypes/rides";
import initialState from '../store/initialState';

const rides = (state = initialState.rides, action) => {
  switch (action.type) {
    case FETCH_ALL_RIDES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_ALL_RIDES_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case FETCH_ALL_RIDES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default rides;
