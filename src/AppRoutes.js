import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "./views/Homapage/Homepage";
import UserProfile from "./views/UserProfile/UserProfile";
import Signup from "./views/Signup/Signup";
import Login from "./views/Signin/Signin";
import Rides from './views/Rides';
import CreateRide from './views/CreateRide';
import RideRequests from './views/RideRequests';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from "./components/common/Footer";

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path='/logout' render={() => <Redirect to='/' />} />
            <Route exact path="/" component={Homepage} />
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/login" component={Login} />
            <ProtectedRoute path="/rides" component={Rides} />
            <ProtectedRoute path="/create-ride" component={CreateRide} />
            <ProtectedRoute path="/user-profile" component={UserProfile} />
            <ProtectedRoute path='/ride-requests' component={RideRequests} />;
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default AppRoutes;
