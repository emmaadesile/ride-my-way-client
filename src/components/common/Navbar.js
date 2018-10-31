import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from '../../actions/auth';

import rideLogo from "../../assets/img/rideLogo.png";

class Navbar extends Component {
  state = {
    toggle: false
  };

  toggleNavbar = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  };

  handleLogout = () => {
    const {logout} = this.props;
    logout();
  }

  render() {
    const { toggle } = this.state;
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
    return (
      <Fragment>
        <div className={`navbar ${toggle ? "responsive" : ""}`}>
          <ul style={{ paddingLeft: "0px" }}>
            <li className="logo">
              <Link to="/">
                <img src={rideLogo} alt="logo" />
              </Link>
            </li>

            {isAuthenticated ? (
              <section className="div_navbar_items">
                <li className="navbar_items">
                  <Link to="/auth/signup"> Rides </Link>
                </li>
                <li className=" navbar_items ">
                  <Link to="/requests"> Ride Requests </Link>
                </li>
                <li className=" navbar_items ">
                  <Link to="/user-profile"> Profile </Link>
                </li>
                <li className=" navbar_items " style={{cursor: 'pointer'}}>
                {/* eslint-disable-next-line */}
                  <a onClick={this.handleLogout}> Signout </a>
                </li>
              </section>
            ) : (
              <section className="div_navbar_items">
                <li className="navbar_items">
                  <Link to="/auth/signup"> Sign Up </Link>
                </li>
                <li className=" navbar_items ">
                  <Link to="/auth/login"> Sign In </Link>
                </li>
              </section>
            )}

            {/* eslint-disable-next-line*/}
            <li
              className="icon"
              onClick={this.toggleNavbar}
              style={{ fontSize: "1.3em" }}
            >
              {" "}
              &#9776;
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => ({
  logout() {
    return dispatch(logOutUser());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
