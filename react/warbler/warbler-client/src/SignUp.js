import React, { Component } from 'react';
import './SignUp.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      imageUrl: ""
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, username, password, profileImageUrl } = this.state;
    const {handleSignUp} = this.props;
    const signupUrlBase = 'http://localhost:8081/api/auth/signup';
    const payload = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password, profileImageUrl})
    }

    fetch(signupUrlBase, payload)
      .then(data => data.json())
      .then(data => {
        if(data.errmsg) {
          this.setState({message: data.errmsg});
        } else {
          handleSignUp({...data, message: `Welcome ${data.username}`});
        }

      })
      .catch((error) => {
        this.setState({message: error})
      });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    return (
      <div className="signup-wrapper">
        <h3>Join Warbler today!</h3>
        <div className="signup-container">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="form-line">
              <label htmlFor='email-input'>Email</label>
              <input
                id="email-input"
                type="text"
                name='email'
                value={email}
                size={36}
                autoComplete="off"
                placeholder=""
                onChange={this.handleChange} />
            </div>
            <div className="form-line">
              <label htmlFor='username-input'>Username</label>
              <input
                id="username-input"
                type="text"
                name='username'
                value={username}
                size={36}
                autoComplete="off"
                placeholder=""
                onChange={this.handleChange} />
            </div>
            <div className="form-line">
              <label htmlFor='password-input'>Password</label>
              <input
                id="password-input"
                type="password"
                name='password'
                value={password}
                size={36}
                autoComplete="off"
                placeholder=""
                onChange={this.handleChange} />
            </div>
            <div className="form-line">
              <label htmlFor='profileImageUrl-input'>Profile Image Url</label>
              <input
                id="profileImageUrl-input"
                type="text"
                name='profileImageUrl'
                value={profileImageUrl}
                size={36}
                autoComplete="off"
                placeholder=""
                onChange={this.handleChange} />
            </div>
            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
