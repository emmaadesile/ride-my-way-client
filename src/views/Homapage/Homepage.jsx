import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import customerCare from "../../assets/img/customerCare.png";
import confirmed from "../../assets/img/confirmed.png";
import timeManagement from "../../assets/img/timeManagement.png";
import Navbar from "../../components/common/Navbar.jsx";

const Homepage = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <div className="">
        <Navbar />
        <header className="header header__content">
          <h1>Get the best deals on your rides</h1>
          <h2>
            Join ride my way community and save time
            <br />
            and money on your commute everyday
          </h2>
          {/* Remove get started button if the user is authenticated */}
          {!isAuthenticated ?
           ( <button className="btn btn__primary btn__inline btn__rounded btn__inline ">
              <Link to="/auth/signup">Get Started</Link>
            </button>
          ) : null}
        </header>

        <div className="intro text-center ">
          <h4 className="lead">Ride My Way In Your City</h4>
          <p className="lead ">
            Wherever you are in Nigeria, count on Ride My Way for rides in
            minutes!
            <br />
            From Lagos to Abuja, Ride My Way is only a few clicks away.
          </p>
        </div>

        {/* features */}
        <section className="features ">
          <h4 className="feature-heading">Why Ride With Us</h4>
          <div className="features-grid mt-1 ">
            {/* feature One */}
            <div className="feature feature-1 ">
              <div className="icon ">
                <img src={confirmed} alt="confirmed" />
              </div>
              <h5>Easy Booking</h5>
              <p>
                Select your preferred rides and ride with only those you wish
                to. Riding with your colleagues, friends, and family has never
                been easier.
              </p>
            </div>
            {/* feature Two */}
            <div className="feature feature-2 ">
              <div className="icon ">
                <img src={customerCare} alt="customer care" />
              </div>
              <h5>24/7 Customer Care</h5>
              <p>
                Our agents are always online 24/7 to sort out any issues you
                might be experiencing. We put our customers first before
                anything else.
              </p>
            </div>
            {/* feature Three */}
            <div className="feature feature-3 ">
              <div className="icon ">
                <img src={timeManagement} alt="time management" />
              </div>
              <h5>Ride on time</h5>
              <p>
                Dont waste any more time waiting for rides. With our pool of
                several cars and drivers in your area, get to your destination
                on time.
              </p>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="about__details">
            <h4>About Us</h4>
            <p>
              As the most reliable carpooling service, we help thousands of
              users, both passengers and drivers make the most of their rides.
              Passengers have control over the rides they wish to join and
              drivers have control over rides they wish to accept. Our cars span
              several routes in your city and we guarantee that you will never
              be stranded.
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Homepage);
