import { RecipesStore } from '@/types/recipeTypes';
import { inject } from 'vue';

// Used to inject the recipeStore into components.
export function useRecipeStore() {
  const recipeStore = inject<RecipesStore>('recipeStore');
  if (!recipeStore) {
    throw new Error('recipeStore is not provided');
  }
  return recipeStore;
}

export function useOtherStore() { /* ... */ }
