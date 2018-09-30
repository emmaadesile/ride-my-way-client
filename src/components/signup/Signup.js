import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import './Signup.css';

class SignupForm extends Component {
  state = {
    error: {},
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className='wrapper'>
      {/* Navbar */}
      <Navbar />
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit} className="form signup-form">
          <label className="form-label">Create an account</label>
          <div className="message"></div>
          <input className="form-control firstname" type="text" name="firstname" placeholder="Firstname" />
          <input className="form-control lastname" type="text" name="lastname" placeholder="Lastname" />
          <input className="form-control username" type="text" name="username" placeholder="Username" />
          <input className="form-control email" type="text" name="email" placeholder="Email" />
          <input className="form-control password" type="password" name="password" placeholder="Password" />
          <input className="form-control confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" />

          <button 
            className="btn btn__primary btn__inline signup-btn" 
            type="submit"
          >
            Sign Up
          </button>
          <p>Already Registered?
            <span>
              <Link to='/signin'>Sign in</Link>
            </span> 
          </p>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    )
  }
}

export default SignupForm;