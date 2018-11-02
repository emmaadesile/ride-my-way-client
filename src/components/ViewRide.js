import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import viewRide from "../actions/viewRide";

const modalRoot = document.getElementById("modal");

class ViewRide extends Component {
  el = document.createElement("div");

  state = {
    view: false
  };

  componentDidMount() {
    const { fetchRideDetails, rideid } = this.props;
    fetchRideDetails(rideid);
  }

  render() {
    const { closeModal, data, loading, error } = this.props;

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
              <button className="btn btn__grey btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn btn__secondary btn-join-ride">Join</button>
            </div>
          </div>
        </div>
      </Fragment>,
      modalRoot
    );
  }
}

const mapStateToProps = state => {
  const { viewRide } = state;

  return {
    data: viewRide.data,
    loading: viewRide.loading,
    error: viewRide.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRideDetails(rideid) {
    return dispatch(viewRide(rideid));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRide);
