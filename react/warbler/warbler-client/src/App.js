import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: '',
      username: '',
      token: '',
      message: '',
      profileImageUrl: ''
    }
  }

  handleClickSignUp = (e) => {

    this.setState({message: "Clicked Sign up"});
  };

  handleClickSignIn = (e) => {
    const loginUrlBase = 'http://localhost:8081/api/auth/signin';
    const payload = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "email": "Leola36@yahoo.com", "password": "password"})
    }

    fetch(loginUrlBase, payload)
      .then(data => data.json())
      .then(data => {
        this.setState({
          userId: data.userId,
          message: `Welcome ${data.username}`,
          username: data.username,
          token: data.token,
          profileImageUrl: data.profileImageUrl
        });
      });
  };

  handleClickSignOut = (e) => {
    this.setState({
      userId: '',
      username: '',
      token: '',
      message: 'Please log in.',
      profileImageUrl: ''
    })
  }

  render() {
    return (
      <div>
        <Navbar handleClickSignUp={this.handleClickSignUp} handleClickSignIn={this.handleClickSignIn} handleClickSignOut={this.handleClickSignOut} username={this.state.username} />
        {this.state.message}
      </div>
    );
  }
}

export default App;
