import React, { Component, Fragment } from "react";
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "./views/Homapage/Homepage";
import About from "./views/About/About";
import UserProfile from "./views/UserProfile/UserProfile";
import Signup from "./views/Signup/Signup";
import Login from "./views/Signin/Signin";
import Rides from './views/Rides';
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
            <Route path="/about" component={About} />
            <Route path="/rides" component={Rides} />
            <Route path="/user-profile" component={UserProfile} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default AppRoutes;
