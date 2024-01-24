<template>
  <div class="recipe-card">
    <h2 class="card-title">{{ recipe.name }}</h2>
    <img :src="recipe.image" alt="Recipe image" class="mock-image">
    <p>{{ recipe.name }}</p>
    <p>{{ recipe.rating }}</p>
    <p>{{ recipe.totalTimeToMake }}</p>
    <p>{{ recipe.difficulty }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Recipe } from '../types/recipeTypes';

export default defineComponent({
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-title {
  align-self: center;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 430px;
  border: 1px solid #ccc;
}

.mock-image {
  width: 270px;
  min-height: 150px;
  border: 2px solid grey;
  text-align: center;
  align-self: center;
}
</style>
