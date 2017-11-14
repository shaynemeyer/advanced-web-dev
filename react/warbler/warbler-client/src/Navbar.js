import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  renderNav = () => {
    const { handleClickSignUp, handleClickSignIn, handleClickSignOut, username } = this.props;
    if(username){
      return <nav><li>Welcome {username}</li><li><a onClick={handleClickSignOut}>Log Out</a></li></nav>
    } else {
      return <nav><li><a onClick={handleClickSignUp}>Sign Up</a></li><li><a onClick={handleClickSignIn}>Log In</a></li></nav>
    }
  };

  render() {
    return (
      <header>
        <h2>
          <a >Warbler</a>
        </h2>
        {this.renderNav()}
      </header>
    )
  }
}

