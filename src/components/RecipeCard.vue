<template>
  <div class="recipe-card">
    <h2 class="card-title">Card title</h2>
    <div class="mock-image">Mock image</div>
    <p>Recipe Name</p>
    <p>Rating</p>
    <p>Time to make</p>
    <p>Difficulty</p>
  </div>
</template>

<script lang="ts">
export default {};
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
