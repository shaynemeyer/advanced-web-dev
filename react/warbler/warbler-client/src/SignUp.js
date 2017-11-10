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
      imageUrl: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-line">
            <label htmlFor='img-input'>Image Url</label>
            <input
              id="img-input"
              type="text"
              name='img'
              value={img}
              size={36}
              autoComplete="off"
              placeholder=""
              onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}
