import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import fetchRides from "../actions/rides";
import Navbar from "../components/common/Navbar.jsx";
import avatar from "../assets/img/avatar.png";

class UserProfile extends Component {
  componentDidMount() {
    const { fetchAllRides } = this.props;
    fetchAllRides();
  }

  render() {
    const { user } = localStorage;
    const userDetails = JSON.parse(user);
    const {
      userId: { firstname, lastname, user_id }
    } = userDetails;
    const { rides } = this.props;
    const ridesArray = rides.filter(ride => ride.user_id === user_id);
    const ridesGiven = ridesArray.length;
    const userFirstname = `${firstname[0].toUpperCase()}${firstname.slice(1)}`;
    const userLastname = `${lastname[0].toUpperCase()}${lastname.slice(1)}`;

    return (
      <Fragment>
        <Navbar />
        <div className="profile-wrapper">
          <div className="profile-page mt-1">
            <div className="profile-info">
              <div className="user-info">
                <img src={avatar} className="profle-image" alt="profile-img" />
                <h4 className="profile-name text-center">
                  {userFirstname} {userLastname}
                </h4>
              </div>

              <div className="rides-count">
                <div className="rides-taken">
                  <h1 className="rides-taken-num">0</h1>
                  <p>Rides Taken</p>
                </div>
                <div className="rides-given">
                  <h1 className="rides-given-num">{ridesGiven}</h1>
                  <p>Rides Given</p>
                </div>
              </div>
            </div>

            <div className="box mt-1" id="rides-taken">
              <div className="box__header text-center">
                <h4 className="box__title rides__taken-header">Rides Taken</h4>
              </div>

              <div className="box__group rides__taken-details">
                <div className="request-details">
                  <h5>Ikorodu to Yaba</h5>
                  <p>Date-Taken: 23-2-2018</p>
                </div>
              </div>
            </div>

            <div className="box" id="rides-given">
              <div className="box__header text-center">
                <h4 className="box__title rides__given-header">Rides Given</h4>
              </div>

              <div className="box__group rides__given-details">
                <div className="ride-details">
                  <h5>Ikorodu to Yaba</h5>
                  <p>Date-Given: 23-2-2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { rides } = state;
  return {
    rides: rides.data,
    loading: rides.loading,
    error: rides.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllRides() {
    return dispatch(fetchRides());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
