import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import fetchRides from "../actions/rides";
import Navbar from "../components/common/Navbar";
import Loading from "../components/Loading/Loading";
import JoinRide from "../components/JoinRide";
import car from "../assets/img/car.png";

class Rides extends Component {
  state = {
    showModal: false,
    rideId: ''
  };

  componentDidMount = () => {
    const { fetchAllRides } = this.props;
    fetchAllRides();
  };

  showModal = (event) => {
    const { id } = event.target.dataset;
    console.log(id);
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };


  render() {
    const { rides, loading } = this.props;
    const { showModal } = this.state;
    return (
      <Fragment>
        <div className="wrapper3">
          <Navbar />
          {loading ? (
            <Loading />
          ) : (
            <section className="rides mt-3 mb-2 pb-4">
              <h4 className="ride-heading ">Available Rides</h4>
              {rides.map(ride => (
                <div className="ride ride-1" key={ride.ride_id}>
                  <div className="icon">
                    <img src={car} alt="car" />
                  </div>
                  <h5 className="ride-info">
                    {ride.location} to {ride.destination}
                  </h5>
                  <button
                    id="btn-modal"
                    className="btn btn__secondary"
                    onClick={this.showModal}
                    data-id={ride.ride_id}
                  >
                    View
                  </button>
                </div>
              ))}
            </section>
          )}
          {showModal ? <div>Modal Active</div> : null}
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
)(Rides);
