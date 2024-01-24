<template>
  <div class="container">

    <label for="orderBy">
      Order Recipes by
      <!-- Using both v-model to bind selectedOrderBy, and @change to call setSelectedOrderBy. -->
      <select v-model="selectedOrderBy" @change="setSelectedOrderBy" id="orderBy" name="orderBy">
        <option v-for="option in orderByOptions" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </label>

    <div v-if="recipesStore.state.value.error">
      <h3>Error loading recipes please reload to try again</h3>
    </div>

    <div v-else-if="recipesStore.state.value.recipes && !recipesStore.state.value.isLoading" class="auto-grid-container">
      <RecipeCard v-for="(recipe, index) in  recipesStore.state.value.recipes" :key="`${recipe.name}-${index}`"
        :recipe="recipe" class="grid-item" />
    </div>

    <div v-else>
      <h3>Loading recipes...</h3>
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
    const selectedOrderBy = ref(recipesStore.state.value.orderBy);

    // Could type to match orderByOptions.
    const orderByOptions = [
      { value: 'asc', text: 'A-Z' },
      { value: 'desc', text: 'Z-A' },
      { value: 'rating', text: 'Rating' },
      { value: 'difficulty', text: 'Difficulty' },
    ];

    onMounted(async () => {
      // Populate state onMounted so data is only loaded when used.
      // Could be done in main.js to make data instantly available if used elsewhere,
      // or in the composable to make it available when injected.
      await recipesStore.fetchAndSaveRecipes();
    });

    const setSelectedOrderBy = () => {
      recipesStore.setOrderBy(selectedOrderBy.value);
    };

    return {
      orderByOptions,
      recipesStore,
      setSelectedOrderBy,
      selectedOrderBy,
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
