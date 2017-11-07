import React, { Component } from 'react';
import './RecipeApp.css';
import Header from './Header';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeList/>
      </div>
    );
  }
}

export default RecipeApp;
