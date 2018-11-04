import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "./views/Homapage/Homepage.jsx";
import UserProfile from "./views/UserProfile.jsx";
import Signup from "./views/Signup/Signup.jsx";
import Login from "./views/Signin/Signin.jsx";
import Rides from './views/Rides.jsx';
import CreateRide from './views/CreateRide.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Footer from "./components/common/Footer.jsx";

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
            {/* <ProtectedRoute path='/ride-requests' component={RideRequests} />; */}
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default AppRoutes;
