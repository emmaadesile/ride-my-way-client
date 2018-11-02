import { combineReducers } from "redux";
import auth from "./auth";
import signup from "./signup";
import signin from "./signin";
import rides from "./rides";
import viewRide from "./viewRide";
import createRide from './createRide';

const rootReducer = combineReducers({
  auth,
  signup,
  signin,
  rides,
  viewRide,
  createRide
});

export default rootReducer;
