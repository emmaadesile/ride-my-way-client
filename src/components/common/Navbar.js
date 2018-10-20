import React, { Component } from 'react';
import { Link } from '@reach/router';
import rideLogo from '../../static/rideLogo.png';

class Navbar extends Component {
  state = {
    isLoggeIn: false
  }
  render() {

    return (
      <div className='navbar'>
        {
          this.state.isLoggeIn
          ? <div className="container navbar__container">
              <li className='logo'><Link to='/'><img src={rideLogo} alt='logo' /></Link></li>
              <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/auth/login'>Logout</Link></li>
                <li><Link to='/rides'>Rides</Link></li>
                <li><Link to='/ride-requests'>Requests</Link></li>
                <li><Link to='/ride-history'>Ride History</Link></li>
                <li><Link to='/user-profile'>Your Profile</Link></li>
              </ul>
            </div>
          : <div className="container navbar__container">
              <li className="logo"><Link to='/'><img src={rideLogo} alt='logo' /></Link></li>
              <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/auth/login'>Log in</Link></li>
                <li><Link to='/auth/signup' className='register'>Register</Link></li>
              </ul>
            </div>
        }
      </div>
    )
  }
}

export default Navbar;