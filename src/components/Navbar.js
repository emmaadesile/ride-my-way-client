import React, { Component } from 'react';
import { Link } from '@reach/router';

class Navbar extends Component {
  state = {
    isLoggeIn: false
  }
  render() {

    return (
      <div>
        {
          this.state.isLoggeIn
          ? <ul>
              {/* <li><Link to='/'><img src={logo} alt='logo' /></Link></li> */}
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/auth/login'>Logout</Link></li>
              <li><Link to='/rides'>Rides</Link></li>
              <li><Link to='/ride-requests'>Requests</Link></li>
              <li><Link to='/ride-history'>Ride History</Link></li>
              <li><Link to='/user-profile'>Your Profile</Link></li>
            </ul>
          : <ul>
              {/* <li><Link to='/'><img src={logo} alt='logo' /></Link></li> */}
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/auth/login'>Login</Link></li>
              <li><Link to='/auth/signup'>Signup</Link></li>
            </ul>
        }
      </div>
    )
  }
}

export default Navbar;