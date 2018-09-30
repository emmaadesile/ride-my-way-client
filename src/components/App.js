import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './homepage/Homepage';
import LoginForm from './login/Login';
import SignupForm from './signup/Signup';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={SignupForm} />
        <Route path='/login' component={LoginForm} />
      </div>
    </Router>
  )
}

export default App;