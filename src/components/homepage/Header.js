import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="top">
        <header className="hero ">
          <h1>Get the best deals on your rides</h1>
          <h2>Join Ride My Way community and save time
            <br /> and money on your commute everyday
          </h2>
          <Link className="btn btn__primary btn__inline btn__rounded btn__inline " to="/signup">Get Started</Link>
        </header>
      </div>
    </div>
  )
}

export default Header;