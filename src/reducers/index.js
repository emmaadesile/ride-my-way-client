import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import signin from './signin';

const rootReducer = combineReducers({
  auth,
  signup,
  signin
});

export default rootReducer;