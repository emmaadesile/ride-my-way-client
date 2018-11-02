import { combineReducers } from "redux";
import auth from "./auth";
import signup from "./signup";
import signin from "./signin";
import rides from "./rides";
import viewRide from "./viewRide";

const rootReducer = combineReducers({
  auth,
  signup,
  signin,
  rides,
  viewRide
});

export default rootReducer;
