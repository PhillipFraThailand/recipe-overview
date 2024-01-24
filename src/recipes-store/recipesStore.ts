import { RecipesStore } from '@/types/recipeTypes';
import { ref } from 'vue';
import { fetchFavoriteRecipes } from '../services/recipe-service/recipeService';

// Custom store object. Used to store recipes and related data.
const store: RecipesStore = {

  setOrderBy(orderBy) {
    this.state.value.orderBy = orderBy;
  },

  getStateValue() {
    return this.state.value;
  },

  state: ref({
    recipes: [],
    isLoading: false,
    error: null,
    orderBy: 'asc',
  }),

  // Fetch recipes from the API and save to the store.
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
      this.state.value.isLoading = false;
    }
  },
};

export default store;
