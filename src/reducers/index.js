import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import signin from './signin';
import rides from './rides';

const rootReducer = combineReducers({
  auth,
  signup,
  signin,
  rides
});

export default rootReducer;