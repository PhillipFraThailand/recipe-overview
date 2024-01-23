import { RawRecipe, Recipe } from '@/types/recipeTypes';

// Extract the data we need from the API, to only have what is necessary in our app.
export const extractRecipeData = (rawRecipes: RawRecipe[]): Recipe[] => rawRecipes.map((rawRecipe) => {
  const {
    prepTimeMinutes, cookTimeMinutes, difficulty, rating, name, image,
  } = rawRecipe;

  // The time to make of a recipe is the sum of the prep time and the cook time.
  const totalTimeToMake = prepTimeMinutes + cookTimeMinutes;

  return {
    name,
    rating,
    totalTimeToMake,
    difficulty,
    image,
  };
});

export const otherFn = () => { /* ... */ };
