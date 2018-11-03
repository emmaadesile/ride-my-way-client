import React, { Component, Fragment } from "react";
import createRide from "../actions/createRide";
import { connect } from "react-redux";
import Navbar from "../components/common/Navbar";
import Loading from "../components/Loading/Loading";

class CreateRide extends Component {
  state = {
    location: "",
    destination: "",
    departuretime: "",
    datecreated: "",
    seatsavailable: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const { createNewRide } = this.props;
    const {
      location,
      destination,
      departuretime,
      datecreated,
      seatsavailable
    } = this.state;
    const user = {
      location,
      destination,
      departuretime,
      datecreated,
      seatsavailable
    };
    createNewRide(user);
  };

  handleChange = event => {
    this.clearMessage()
    return this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { error, message, loading } = this.props;

    return (
      <Fragment>
        <Navbar />
        <div className="wrapper2">
          {loading ? (
            <Loading />
          ) : (
            <div className="offer-ride-form mt-3">
              <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="Create Ride" className="form-label">
                  Create Ride Offer
                </label>
                {error ? <div className="errorMessage">{error}</div> : null}
                {message ? (
                  <div className="successMessage">{message}</div>
                ) : null}
                <input
                  className="form-control location"
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="form-control destination"
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="form-control departuretime"
                  type="time"
                  pattern="^(?:2[0-3]|[01][0-9]):[0-5][0-9]$"
                  name="departuretime"
                  required
                  onChange={this.handleChange}
                  placeholder="Depature Time [12:00:00]"
                  title="Enter the time in this format HH:MM"
                />

                <input
                  className="form-control datecreated"
                  type="date"
                  name="datecreated"
                  placeholder="Date [YYYY-MM-DD]"
                  onChange={this.handleChange}
                  title="Enter a date in this format YYYY-MM-DD"
                />
                <input
                  className="form-control seatsavailable"
                  type="number"
                  min="2"
                  max="12"
                  name="seatsavailable"
                  placeholder="Seats Available"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn__primary btn__inline btn-ride"
                  type="submit"
                >
                  Create Ride
                </button>
              </form>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { createRide } = state;

  return {
    message: createRide.message,
    loading: createRide.loading,
    error: createRide.error
  };
};

const mapDispatchToProps = dispatch => ({
  createNewRide(rideData) {
    return dispatch(createRide(rideData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRide);
