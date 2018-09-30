import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Header from './Header';
import Info from './Info';
import Features from './Features';
import About from './About';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Info />
        <Features />
        <About />
        <Footer />
      </div>
    )
  }
}

export default HomePage;