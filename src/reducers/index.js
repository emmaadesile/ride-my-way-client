import { combineReducers } from "redux";
import auth from "./auth";
import signup from "./signup";
import signin from "./signin";
import rides from "./rides";
import viewRide from "./viewRide";
import createRide from './createRide';
import joinRide from './joinRide';

const rootReducer = combineReducers({
  auth,
  signup,
  signin,
  rides,
  viewRide,
  createRide,
  joinRide
});

export default rootReducer;
