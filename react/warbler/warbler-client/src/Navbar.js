import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <header>
        <h2>
          <a href="">Warbler</a>
        </h2>
        <nav>
          <li><a>Sign Up</a></li>
          <li><a>Log In</a></li>
        </nav>
      </header>
    )
  }
}

