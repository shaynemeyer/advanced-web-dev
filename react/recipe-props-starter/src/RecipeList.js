import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends Component {

  render() {
    const recipesList = [
      {
        title: "Spaghetti",
        img: "spaghetti.jpg",
        instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
        ingredients: ["8 cups water", "1 box spaghetti"]
      },
      {
        title: "Milkshake",
        img: "milkshake.jpg",
        instructions: "Combine ice cream and milk. Blend until creamy.",
        ingredients: ["2 scoops ice cream", "8 ounces milk"]
      },
      {
        title: "Avocado Toast",
        img: "avocado_toast.jpg",
        instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"]
      }
    ];
    const recipes = recipesList.map((r, i) => (<Recipe key={i} {...r} />))
    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default RecipeList;