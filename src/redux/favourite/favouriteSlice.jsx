import {
  fetchFavouriteRecipes,
  toggleFavouriteRecipes,
} from './favouriteOperations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteRecipes: {
    recipes: [
      {
        _id: '640cd5ac2d9fecf12e8898fa',
        title: 'Beef Rendang',
        category: 'Beef',
        description:
          'A spicy and aromatic Indonesian curry made with tender beef slow-cooked in coconut milk and a blend of flavorful spices like lemongrass, galangal, and turmeric. Served with a side of steamed rice for a hearty meal.',
        preview:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561437/y7ytkxdg8brzbzxhvylv.jpg',
        time: '120',
        popularity: 12,
        like: false,
        favorite: true,
      },
      {
        _id: '640cd5ac2d9fecf12e8898c7',
        title:
          'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
        category: 'Beef',
        description:
          'These beef banh mi bowls are a deconstructed version of the classic Vietnamese sandwich, featuring marinated beef, pickled vegetables, and a spicy sriracha mayo sauce.',
        preview:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561362/hscfabcvi2mjkqudfs6s.jpg',
        time: '45',
        popularity: 8,
        like: false,
        favorite: true,
      },
    ],
    total: 0,
  },
  isLoading: false,
  error: false,
};

const favouriteRecipesSlice = createSlice({
  name: 'favouriteRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFavouriteRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchFavouriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        // state.favouriteRecipes.recipes = action.payload.recipes;
        state.favouriteRecipes.total = action.payload.total;
      })
      .addCase(fetchFavouriteRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(toggleFavouriteRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(toggleFavouriteRecipes.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.favouriteRecipes.recipes.findIndex(
          recipe => recipe._id === action.payload._id
        );
        state.favouriteRecipes.recipes[index] = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(toggleFavouriteRecipes.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const favouriteRecipesReducer = favouriteRecipesSlice.reducer;
