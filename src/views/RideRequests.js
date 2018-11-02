import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import fetchRideRequests from "../actions/rideRequests";
import Navbar from '../components/common/Navbar';


class RideRequests extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="wrapper2">
          <section className="ride-requests-body">
            <div className="box">
              <div className="box__header text-center">
                <h4 className="box__title">Ride Notifications</h4>
              </div>

              <div className="box__group ride-requests">
                <div className="request-details">
                  <h5>Ikorodu to Yaba</h5>
                  <p>Departure Time: 4:00pm</p>
                  <p>Seats Available: 3</p>
                  <p>Requester: Dave</p>
                </div>
                <div className="request-btns">
                  <button
                    className="btn btn__secondary"
                    onClick={this.acceptRideRequest}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn__grey"
                    onClick={this.cancelRideRequest}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { rideRequests } = state;

  return {
    loading: rideRequests.loading,
    requests: rideRequests.requests,
    error: rideRequests.console.error()
  };
};

const mapDispatchToProps = dispatch => ({
  getRideRequests() {
    dispatch(fetchRideRequests());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RideRequests);
