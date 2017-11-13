import React, { Component } from 'react';
import './SignIn.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

  handleOnSubmit = (e) => {
    const {handleSignIn} = this.props;
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
        const user = {
          userId: data.userId,
          message: `Welcome ${data.username}`,
          username: data.username,
          token: data.token,
          profileImageUrl: data.profileImageUrl
        };
        handleSignIn(user);
      })
      .catch((error) => {
        this.setState({error: 'Log in failed. Please check your credentials and try again.'})
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="signup-wrapper">
        <h3>Welcome Back</h3>
        <div className="signin-form-container">
          <form className="signin-form">
            <div className="form-line">
              <label htmlFor="signin-title-input">Email</label>
              <input
                id='signin-title-input'
                key='email'
                type="text"
                name='email'
                value={email}
                size={42}
                autoComplete="off"
                onChange={this.handleChange} />
            </div>
            <div className="form-line">
              <label htmlFor="signin-title-input">Password</label>
              <input
                id='signin-title-input'
                key='password'
                type="password"
                name='password'
                value={password}
                size={42}
                autoComplete="off"
                onChange={this.handleChange} />
            </div>
            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}>Sign In</button>
          </form>
        </div>
      </div>
    )
  }

}
