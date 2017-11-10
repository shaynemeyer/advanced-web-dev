import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

class App extends Component {

  handleClickSignUp() {

  }

  handleClickSignIn() {

  }

  render() {
    return (
      <div>
        <Navbar handleClickSignUp={this.handleClickSignUp} handleClickSignIn={this.handleClickSignIn} />
      </div>
    );
  }
}

export default App;
