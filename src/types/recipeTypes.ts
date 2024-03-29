import { Ref } from 'vue';

export type Difficulty = 'easy' | 'medium' | 'hard';

// Raw type received from the recipe API.
export type RawRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
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

export type OrderBy = 'asc' | 'desc' | 'rating' | 'difficulty' // How to order the recipes. Save preference as it's used in multiple pages.

// The recipes stores' state.
export interface RecipeStoreState {
  recipes: Recipe[]; // List of recipes.
  isLoading: boolean; // Set to true while loading and false when done.
  error: null | Error; // Error object if an error occurred during load. Used to display err msg or retry.
  orderBy: OrderBy;
}

// The recipes store object.
export interface RecipesStore {
  state: Ref<RecipeStoreState>;
  fetchAndSaveRecipes: () => Promise<void>
  setOrderBy: (orderBy: OrderBy) => void;
}
