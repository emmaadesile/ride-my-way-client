import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const {
      component: ProtectedComponent,
      isAuthenticated,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <ProtectedComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated
  };
};
/*
  Set ProtectedRoute to be an impure component to allow rendering
  https: //stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working
 */
export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(ProtectedRoute);
