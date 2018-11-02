import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import App from "./App";
import userIsLoggedIn from './utils/userIsLoggedIn';
import { logOutUser, setLoggedInUser } from './actions/auth';
import "./style/style.scss";

const store = configureStore();
console.log(__API__);

if (userIsLoggedIn()) {
  // set current user in store
  const user = (localStorage.user);
  store.dispatch(setLoggedInUser(user));
} else {
  store.dispatch(logOutUser());
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
