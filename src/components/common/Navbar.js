import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import '../../assets/styles/style.css';
import '../../assets/images/hamburger.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div className="navbar box-shadow-none">
        <ul>
          <li className="logo">
            <Link to="/">
              <img src={require('../../assets/images/ride-logo.png')} alt="logo" />
            </Link>
          </li>
  
          <section className="div_navbar_items">
            <li className="navbar_items"> <Link to="/signup"> Sign Up </Link> </li>
            <li className=" navbar_items ">
              <Link to="/login"> Sign In </Link>
            </li>
          </section>
  
          <li className="icon">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;