import React, { Component } from 'react';
import './RecipeApp.css';
import Header from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          img: "spaghetti.jpg",
          instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
          ingredients: ["8 cups water", "1 box spaghetti"]
        },
        {
          id: 1,
          title: "Milkshake",
          img: "milkshake.jpg",
          instructions: "Combine ice cream and milk. Blend until creamy.",
          ingredients: ["2 scoops ice cream", "8 ounces milk"]
        },
        {
          id: 2,
          title: "Avocado Toast",
          img: "avocado_toast.jpg",
          instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"]
        }
      ],
      nextRecipeID: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeID};
      return {
        nextRecipeID: prevState.nextRecipeID + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Header onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ?
            <RecipeInput
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}/> : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
