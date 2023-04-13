import PageTitle from 'components/PageTitle/PageTitle';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';
import { List } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const randomRecipes = useSelector(selectRecipesMainPage);
  const list = Object.entries(randomRecipes);

  let mobileMedia = window.matchMedia('(max-width: 376px)');
  let tabletMedia = window.matchMedia(
    '(min-width: 377px) and (max-width: 769px)'
  );
  let desktopMedia = window.matchMedia('(min-width: 770px)');

  const filteredRecipesList = recipe => {
    if (!recipe) return;
    if (mobileMedia.matches) {
      const mobileList = recipe.slice(0, 1);
      return mobileList;
    } else if (tabletMedia.matches) {
      const tabletList = recipe.slice(0, 2);
      return tabletList;
    } else if (desktopMedia.matches) {
      return recipe;
    }
  };

  return list.flatMap(item => {
    return (
      <div key={item[0]}>
        <PageTitle type="mainPage">{item[0]}</PageTitle>
        <List>
          <RecipeCard recipe={filteredRecipesList(item[1])} />
          {/* {item[1].map(item => {
            return (
              <div className="card" key={item._id}>
                <img src={item.preview} alt={item.title} />
                <p className="title">{item.title}</p>
              </div>
            );
          })} */}
        </List>
        <button type="button">See all</button>
      </div>
    );
  });
};

export default PreviewCategories;
