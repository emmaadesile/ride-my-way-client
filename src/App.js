import React, { Component } from 'react';
import { Router } from '@reach/router';
import Homepage from './components/Homapage/Homepage';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Homepage path='/' />
        <Signup path='/auth/signup' />
        <Login path='/auth/login' />
        <About path='/about' />
        <UserProfile path='/user-profile' />
      </Router>
    )
  }
}

export default App;