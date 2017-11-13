import React, { Component } from 'react';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: '',
      username: '',
      token: '',
      message: '',
      profileImageUrl: '',
      loadedComponent: 'SignUp'
    }
  }

  handleClickSignUp = (e) => {

    this.setState({message: "Clicked Sign up", loadedComponent: 'SignUp'});
  };

  handleClickSignIn = (e) => {
    this.setState({loadedComponent: 'SignIn'});
  };

  handleSignIn = (user) => {
    this.setState({
      userId: user.userId,
      username: user.username,
      token: user.token,
      message: '',
      profileImageUrl: user.profileImageUrl,
      loadedComponent: 'Home'
    })
  };

  handleSignUp = (confirm) => {

  };

  handleClickSignOut = (e) => {
    this.setState({
      userId: '',
      username: '',
      token: '',
      message: 'Please log in.',
      profileImageUrl: ''
    })
  };

  loadComponent() {
    if(this.state.loadedComponent === 'SignIn') {
      return <SignIn handleSignIn={this.handleSignIn} />
    } else {
      return <SignUp handleSignUp={this.handleSignUp}/>
    }
  }

  render() {
    return (
      <div>
        <Navbar handleClickSignUp={this.handleClickSignUp} handleClickSignIn={this.handleClickSignIn} handleClickSignOut={this.handleClickSignOut} username={this.state.username} />
        {this.state.message}
        {this.loadComponent()}
      </div>
    );
  }
}

export default App;
