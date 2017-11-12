import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    let { handleClickSignUp, handleClickSignIn, handleClickSignOut, username } = this.props;

    return (
      <header>
        <h2>
          <a >Warbler</a>
        </h2>
        <nav>
          <li><a onClick={handleClickSignUp}>Sign Up</a></li>
          {username.length > 0 ? <li><a onClick={handleClickSignOut}>Log Out</a></li> : <li><a onClick={handleClickSignIn}>Log In</a></li>}
        </nav>
      </header>
    )
  }
}

