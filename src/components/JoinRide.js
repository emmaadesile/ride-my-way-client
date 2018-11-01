import React, { Component, Fragment } from "react";

const modalRoot = document.getElementById("modal");

class JoinRide extends Component {
  el = document.createElement("div");

  state = {
    error: ""
  };

  render() {
    const {
      location,
      destination,
      departuretime,
      datecreated,
      seatsavailable,
      closeModal
    } = this.props;

    return React.createPortal(
      <Fragment>
        <div className="modal-content">
          <div className="modal-header">
          {/* eslint-disable-next-line */}
            <span className="close" onClick={closeModal}>&times;</span>
            <h4>Ride Details</h4>
          </div>
          <div className="modal-body">
            <h6>Location: {location}</h6>
            <h6>Destination: {destination}</h6>
            <h6>Departure Time: {departuretime}</h6>
            <h6>Date Created: {datecreated.slice(0, 10)}</h6>
            <h6>Seats Available: {seatsavailable}</h6>
          </div>
          <div className="modal-footer">
            <button className="btn btn__grey btn-cancel" onClick={closeModal}>Cancel</button>
            <button className="btn btn__secondary btn-join-ride">Join</button>
          </div>
        </div>
      </Fragment>,
      modalRoot
    );
  }
}

export default JoinRide;
