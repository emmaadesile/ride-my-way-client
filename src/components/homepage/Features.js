import React from 'react';

const Features = () => {
  return (
    <section className="features ">
      <h4 className="feature-heading ">Why Ride With Us</h4>
      <div className="features-grid mt-1 ">
        {/* Feature one */}
        <div className="feature feature-1 ">
          <div className="icon ">
            <img src={require('../../assets/images/confirmed.png')} alt="Confirmed" />
          </div>
          <h5>Easy Booking</h5>
          <p>Select your preferred rides and ride with only those you wish to. Riding with your colleagues, friends, and family
            has never been easier.</p>
        </div>
        {/* Feature two */}
        <div className="feature feature-2 ">
          <div className="icon ">
            <img src={require('../../assets/images/customer-care.png')} alt="Customer Care" />
          </div>
          <h5>24/7 Customer Care</h5>
          <p>Our agents are always online 24/7 to sort out any issues you might be experiencing. We put our customers first
            before anything else.</p>
        </div>
        {/* Feature Three */}
        <div className="feature feature-3 ">
          <div className="icon ">
            <img src={require('../../assets/images/time-management.png')}alt="time-management" />
          </div>
          <h5>Ride on time</h5>
          <p>Dont waste any more time waiting for rides. With our pool of several cars and drivers in your area, get to your
            destination on time.</p>
        </div>
      </div>
    </section>
  )
}

export default Features;