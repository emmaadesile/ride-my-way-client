import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Header from '../Header';
import Footer from '../common/Footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Homepage;