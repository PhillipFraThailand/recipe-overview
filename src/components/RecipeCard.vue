<template>
  <div class="recipe-card">
    <h2 class="card-title">{{ recipe.name }}</h2>
    <img :src="recipe.image" :alt="`Recipe image of dish ${recipe.name}`" class="recipe-image">
    <p>Name: {{ recipe.name }}</p>
    <p>Rating: {{ recipe.rating }}</p>
    <p>Time To Make: {{ recipe.totalTimeToMake }} minutes</p>
    <p>Difficulty Level: {{ recipe.difficulty }}</p>
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

.recipe-image {
  width: 270px;
  min-height: 150px;
  border: 2px solid grey;
  text-align: center;
  align-self: center;
}
</style>
