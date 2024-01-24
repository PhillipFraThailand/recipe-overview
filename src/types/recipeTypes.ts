import { Ref } from 'vue';

// Raw type received from the recipe API.
export type RawRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

// The type used in our app. prepTimeMinutes and cookTimeMinutes are combined into totalTimeToMake.
export type Recipe = Pick<RawRecipe, 'name' | 'rating' | 'image' | 'difficulty'>
  & { totalTimeToMake: number };

// The recipes stores' state.

type OrderBy = 'asc' | 'desc' | 'rating' // How to order the recipes. Save preference as it's used in multiple pages.
export interface RecipeStoreState {
  recipes: Recipe[]; // List of recipes.
  isLoading: boolean; // Set to true while loading and false when done.
  error: null | Error; // Error object if an error occurred during load. Used to display err msg or retry.
  orderBy: OrderBy;
}

// The recipes store object.
export interface RecipesStore {
  getStateValue: () => RecipeStoreState; // Getter function for state value to avoid writing .state.value everywhere.
  state: Ref<RecipeStoreState>;
  fetchAndSaveRecipes: () => Promise<void>
  setOrderBy: (orderBy: OrderBy) => void;
}
