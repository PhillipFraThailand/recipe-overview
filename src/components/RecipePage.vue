<template>
  <div class="container">
    <h1>Favorite Recipes</h1>

    <!-- TODO: Create global order by, to pretend it should persist to be used on other pages -->
    <label for="orderBy">
      Order Recipes by
      <select v-model="selectedOrderBy" @change="setSelectedOrderBy" id="orderBy" name="orderBy">
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="rating">Rating</option>
        <option value="difficulty">Difficulty</option>
      </select>
    </label>

    <div v-if="recipesStore.state.value.recipes && !recipesStore.state.value.isLoading" class="auto-grid-container">
      <RecipeCard v-for="(recipe, index) in  recipesStore.state.value.recipes" :key="`${recipe.name}-${index}`"
        :recipe="recipe" class="grid-item" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref,
} from 'vue';
import RecipeCard from './RecipeCard.vue';
import { useRecipeStore } from '../recipes-store/composables';

export default defineComponent({
  components: {
    RecipeCard,
  },
  setup() {
    const recipesStore = useRecipeStore();
    const { setOrderBy } = recipesStore;
    const selectedOrderBy = ref(recipesStore.state.value.orderBy);

    onMounted(async () => {
      // Populate state onMounted so data is only loaded when used.
      // Could be done in main.js to make data instantly available if used elsewhere,
      // or in the composable to make it available when injected.
      await recipesStore.fetchAndSaveRecipes();
    });

    const setSelectedOrderBy = () => {
      console.log('selectedOrderBy', selectedOrderBy.value);
      setOrderBy(selectedOrderBy.value);
    };

    return {
      recipesStore,
      setSelectedOrderBy,
      selectedOrderBy,
      setOrderBy,
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
