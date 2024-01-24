<template>
  <header>
    <h1>Favorite Recipes</h1>
  </header>
  <RecipePage />
  <footer>
    <p>By Phillip Eismark</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecipePage from './components/RecipePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    RecipePage,
  },
});
</script>

<style >
#app {
  /* Add horizontal padding to all pages */
  padding: 0 20rem;
}

@media (max-width: 2560px) {
  #app {
    padding: 0 20rem;
  }
}

@media (max-width: 2107px) {
  #app {
    padding: 0 18rem;
    background-color: red;
  }
}

@media (max-width: 1989px) {
  #app {
    padding: 0 17rem;
  }
}

@media (max-width: 1440px) {
  #app {
    padding: 0 15rem;
    background-color: blue;
  }
}

@media (max-width: 1344px) {
  #app {
    padding: 0 12rem;
  }
}

@media (max-width: 1206px) {
  #app {
    padding: 0 8rem;
  }
}

@media (max-width: 1024px) {
  #app {
    padding: 0 6rem;
  }
}

@media (max-width: 768px) {
  #app {
    padding: 0 2rem;
  }
}

@media (max-width: 425px) {
  #app {
    padding: 0 2rem;
  }
}

@media (max-width: 375px) {
  #app {
    padding: 0;
  }
}
</style>
