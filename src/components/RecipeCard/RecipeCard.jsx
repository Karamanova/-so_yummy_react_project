import React from 'react';
import { NavLink } from 'react-router-dom';
import { RecipeCardBox } from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
  function truncateTitle(str) {
    const shortTitle = str.split(' ');
    console.log(shortTitle);
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }
  console.log(recipe);
  return recipe.map(item => {
    return (
      <NavLink to={`/recipe/${item._id}`}>
        <RecipeCardBox key={item._id}>
          <img src={item.preview} alt={item.title} />
          <p className="title">{truncateTitle(item.title)}</p>
        </RecipeCardBox>
      </NavLink>
    );
  });
};

export default RecipeCard;
