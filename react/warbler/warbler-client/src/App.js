import React, { Component } from 'react';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
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

    this.setState({loadedComponent: 'SignUp'});
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
    });
  };

  handleSignUp = (confirm) => {
    if(confirm.username) {
      this.setState({loadedComponent: 'SignIn', message: 'Please Sign In'});
    } else {
      this.setState({message: 'Something went wrong with signup.'});
    }
  };

  handleClickSignOut = (e) => {
    this.setState({
      userId: '',
      username: '',
      token: '',
      message: '',
      profileImageUrl: '',
      loadedComponent: 'SignUp'
    })
  };

  loadComponent() {
    const { loadedComponent } = this.state;
    if (loadedComponent === 'SignIn') {
      return <SignIn handleSignIn={this.handleSignIn}/>
    } else if (loadedComponent === 'Home') {
      return <Home />
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
