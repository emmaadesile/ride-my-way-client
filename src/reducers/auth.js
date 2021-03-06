import isEmpty from 'lodash/isEmpty';

import { SET_CURRENT_USER, LOGOUT_USER } from '../actionTypes/auth';
import { SIGNUP_SUCCESS } from '../actionTypes/signup';
import { SIGNIN_SUCCESS } from '../actionTypes/signin';

import signup from './signup';
import signin from './signin';
import initialState from '../store/initialState';

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }

    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true
      };
    default:
      return {
        ...state,
        signin: signin(state.signin, action),
        signup: signup(state.signup, action)
      }
  }
};

export default auth;