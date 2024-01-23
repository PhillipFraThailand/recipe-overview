<template>
  <div class="container">
    <h1>Favorite Recipes</h1>

    <!-- TODO: Create global order by, in case it should persist to other pages -->
    <label for="orderBy">
      Order Recipes by
      <select id="orderBy" name="orderBy">
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
        <option value="rating">Rating</option>
        <option value="difficulty">Difficulty</option>
      </select>
    </label>

    <div class="auto-grid-container">
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
      <RecipeCard class="grid-item" />
    </div>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue';

export default {
  data() {
    return {
      orderBy: 'asc', // Default value
    };
  },
  components: {
    RecipeCard,
  },
};
</script>
<style>
.container {
  background-color: white;
}

/* AUTO GRID explained https://archive.hankchizljaw.com/wrote/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/ */
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
