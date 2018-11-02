import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import fetchRides from "../actions/rides";
import Navbar from "../components/common/Navbar";
import Loading from "../components/Loading/Loading";
import ViewRide from "../components/ViewRide";
import car from "../assets/img/car.png";

class Rides extends Component {
  state = {
    showModal: false,
    rideid: ''
  };

  componentDidMount = () => {
    const { fetchAllRides } = this.props;
    fetchAllRides();
  };

  showModal = (event) => {
    const { rideid } = event.target.dataset;
    this.setState({
      showModal: true,
      rideid
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };


  render() {
    const { rides, loading } = this.props;
    const { showModal, rideid } = this.state;

    return (
      <Fragment>
        <div className="wrapper3">
          <Navbar />
          {loading ? (
            <Loading />
          ) : (
            <section className="rides mt-3 mb-2 pb-4">

              <h4 className="ride-heading ">{rides.length === 0 ? 'No rides available' : 'Available Rides'}</h4>
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
                    data-rideid={ride.ride_id}
                  >
                    View
                  </button>
                </div>
              ))}
            </section>
          )}
          {showModal ? <ViewRide rideid={rideid} closeModal={this.closeModal} /> : null}
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
