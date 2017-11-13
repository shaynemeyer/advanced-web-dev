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
    // bubble up on onSave to parent
    this.setState({
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
    );
  }
}
