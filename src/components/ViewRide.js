import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import viewRide from "../actions/viewRide";
import joinRide from "../actions/joinRide";

const modalRoot = document.getElementById("modal");

class ViewRide extends Component {
  el = document.createElement("div");

  componentDidMount() {
    const { fetchRideDetails, rideid } = this.props;
    fetchRideDetails(rideid);
  }

  handleJoinRideRequest = () => {
    const { rideid, joinRide } = this.props;
    joinRide(rideid);
  };

  render() {
    const {
      closeModal,
      data,
      error,
      rideRequestMessage,
      rideRequestError
    } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              {/* eslint-disable-next-line */}
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h4>Ride Details</h4>
            </div>
            <div className="modal-body">
              {error
                ? error
                : data.map(ride => (
                    <div key={ride.ride_id}>
                      <h6>Location: {ride.location}</h6>
                      <h6>Destination: {ride.destination}</h6>
                      <h6>Departure Time: {ride.departuretime}</h6>
                      <h6>Date Created: {ride.datecreated.slice(0, 10)}</h6>
                      <h6>Seats Available: {ride.seatsavailable}</h6>
                    </div>
                  ))}
            </div>
            <div className="modal-footer">
              {rideRequestMessage ? (
                <div className='text-success'>{rideRequestMessage}</div>
              ) : (
                <div className='modal-footer-items'>
                  <button
                    className="btn btn__grey btn-cancel"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn__secondary btn-join-ride"
                    onClick={this.handleJoinRideRequest}
                  >
                    Join
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>,
      modalRoot
    );
  }
}

const mapStateToProps = state => {
  const { viewRide, joinRide } = state;

  return {
    data: viewRide.data,
    loading: viewRide.loading,
    error: viewRide.error,

    rideRequestMessage: joinRide.message,
    rideRequestError: joinRide.error,
    rideRequestLoading: joinRide.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRideDetails(rideid) {
    return dispatch(viewRide(rideid));
  },
  joinRide(rideid) {
    return dispatch(joinRide(rideid));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRide);
