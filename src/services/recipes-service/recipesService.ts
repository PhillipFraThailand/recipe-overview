import { Recipe } from '@/types/recipeTypes';
import { extractRecipeData } from './utils';

const BASE_URL = process.env.VUE_APP_API_BASE_URL;

// Fetches recipes and returns only the needed data.
export const fetchFavoriteRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await fetch(`${BASE_URL}/recipes`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const JSON = await response.json(); // Convert the response to JSON.
    const rawRecipesArr = JSON.recipes; // Get the recipes array from the JSON.
    const filteredRecipe = extractRecipeData(rawRecipesArr); // Transform the data to only have what we need.

    return filteredRecipe;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchAllRecipes = async () => { /* .. */ };
