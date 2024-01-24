import { createApp } from 'vue';
import App from './App.vue';
import recipesStore from './recipes-store/recipesStore';
import { RecipesStore } from './types/recipeTypes';

const app = createApp(App);

// Provide the recipeStore to all components via inject option
app.provide<RecipesStore>('recipeStore', recipesStore);

app.mount('#app');
