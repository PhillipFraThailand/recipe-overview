<template>
  <div class="container">
    <h1>Favorite Recipes</h1>

    <!-- TODO: Create global order by, to pretend it should persist to be used on other pages -->
    <label for="orderBy">
      Order Recipes by
      <select id="orderBy" name="orderBy">
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
        <option value="rating">Rating</option>
        <option value="difficulty">Difficulty</option>
      </select>
    </label>

    <div v-if="!recipesStore.state.value.isLoading" class="auto-grid-container">
      <!-- :key is required for vue in its diffing algo -->
      <RecipeCard v-for="(recipe, index) in  recipesStore.state.value.recipes" :key="`${recipe.name}-${index}`"
        :recipe="recipe" class="grid-item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import RecipeCard from './RecipeCard.vue';
import { useRecipeStore } from '../recipes-store/composables';

export default defineComponent({
  components: {
    RecipeCard,
  },
  setup() {
    // Inject recipesStore in the component and return it for use
    const recipesStore = useRecipeStore(); // Note: empty until fetchAndSave has been called

    onMounted(async () => {
      await recipesStore.fetchAndSaveRecipes(); // Populate recipesStore recipes state.
      console.log('recipesStore', recipesStore);
    });

    return {
      recipesStore,
    };
  },

});
</script>

<style>
.container {
  background-color: white;
}

/* AUTO GRID: https://archive.hankchizljaw.com/wrote/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/ */
.auto-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  row-gap: 20px;
  column-gap: 20px;

}

.grid-item {
  grid-column: span 1;
}
</style>
