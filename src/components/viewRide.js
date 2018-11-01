import React from "react";

const ViewRide = ({
  location,
  destination,
  departuretime,
  datecreated,
  seatsavailable
}) => (
  <div className="modal-content">
    <div className="modal-header">
      <span className="close">&times;</span>
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
      <button className="btn btn__grey btn-cancel">Cancel</button>
      <button className="btn btn__secondary btn-join-ride">Join</button>
    </div>
  </div>
);

export default ViewRide;
