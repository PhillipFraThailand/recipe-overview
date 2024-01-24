import { RecipesStore } from '@/types/recipeTypes';
import { inject } from 'vue';

// Used to inject the recipeStore into components.
export async function useRecipeStore() {
  const recipeStore = inject<RecipesStore>('recipeStore');
  recipeStore?.fetchAndSaveRecipes();
  if (!recipeStore) {
    throw new Error('recipeStore is not provided');
  }
  await recipeStore.fetchAndSaveRecipes();

  return recipeStore.getStateValue();
}

export function useOtherStore() { /* ... */ }
