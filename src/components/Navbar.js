import React, { Component } from 'react';
import { Link } from '@reach/router';
import rideLogo from '../static/rideLogo.png';

class Navbar extends Component {
  state = {
    isLoggeIn: false
  }
  render() {

    return (
      <div className='navbar'>
        {
          this.state.isLoggeIn
          ? <ul>
              <li className='logo'><Link to='/'><img src={rideLogo} alt='logo' /></Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/auth/login'>Logout</Link></li>
              <li><Link to='/rides'>Rides</Link></li>
              <li><Link to='/ride-requests'>Requests</Link></li>
              <li><Link to='/ride-history'>Ride History</Link></li>
              <li><Link to='/user-profile'>Your Profile</Link></li>
            </ul>
          : <ul>
              <li><Link to='/'><img src={rideLogo} alt='logo' /></Link></li>
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