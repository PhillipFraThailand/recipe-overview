import { RecipesStore } from '@/types/recipeTypes';
import {
  ref, watch,
} from 'vue';
import { fetchFavoriteRecipes } from '../services/recipe-service/recipeService';
import { sortRecipes } from './utils';

// Custom store object. Used to store recipes and related data.
const store: RecipesStore = {
  state: ref({
    recipes: [],
    isLoading: false,
    error: null, // To test this set to: new Error('Test error') and remove the reset in the fetchAndSaveRecipes by commenting out the error = null.
    orderBy: 'asc',
  }),

  setOrderBy: (orderBy) => {
    store.state.value.orderBy = orderBy;
  },

  getStateValue(): typeof store.state.value {
    return store.state.value;
  },

  // Fetches recipes from the API and saves to the store state.
  async fetchAndSaveRecipes() {
    this.state.value.isLoading = true;
    try {
      const recipes = await fetchFavoriteRecipes();
      this.state.value.error = null; // Reset error state on success when retrying.
      this.state.value.recipes = recipes;
    } catch (error) {
      if (error instanceof Error) {
        this.state.value.error = error;
      } else {
        this.state.value.error = new Error('Unknown error');
      }
    } finally {
      this.state.value.isLoading = false; // Reset the loading state
    }
  },
};

watch(() => store.state.value.orderBy, (newOrderBy) => {
  sortRecipes(store.state.value.recipes, newOrderBy);
});

export default store;
