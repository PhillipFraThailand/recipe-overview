import { RecipesStore } from '@/types/recipeTypes';
import { inject } from 'vue';

const RECIPE_STORE = 'recipeStore';

// Used to inject the recipeStore into components.
export function useRecipeStore() {
  const recipeStore = inject<RecipesStore>(RECIPE_STORE);
  if (!recipeStore) {
    throw new Error(`${RECIPE_STORE} is not provided`);
  }
  return recipeStore;
}

export function useOtherStore() { /* ... */ }
