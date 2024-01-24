import { RecipesStore } from '@/types/recipeTypes';
import { ref } from 'vue';
import { fetchFavoriteRecipes } from '../services/recipe-service/recipeService';

// Custom store object. Used to store recipes and related data.
const store: RecipesStore = {
  state: ref({
    recipes: [],
    isLoading: false,
    error: null,
    orderBy: 'desc',
  }),

  // This function refers directly to store. That's possible due to the store object being defined before setOrderBy.
  setOrderBy: (orderBy) => {
    store.state.value.orderBy = orderBy;
  },

  getStateValue() {
    return store.state.value;
  },

  // Fetches recipes from the API and save to the store.
  async fetchAndSaveRecipes() {
    this.state.value.isLoading = true;
    try {
      const recipes = await fetchFavoriteRecipes();
      this.state.value.error = null; // Reset error state on success when retrying.
      this.state.value = { ...this.state.value, recipes };
    } catch (error) {
      if (error instanceof Error) {
        this.state.value.error = error;
      } else {
        this.state.value.error = new Error('Unknown error');
      }
    } finally {
      this.state.value.isLoading = false;
    }
  },
};

export default store;
