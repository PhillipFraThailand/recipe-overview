<template>
  <RecipePage />
  <!-- todo: check how to use semantic html in vue -->
  <!-- todo setup alias when i feel like i found a structure-->
  <!-- todo: use computed to transform list of recipes on order by change -->
  <!-- todo save orderby setting in localStorage then get it onMount if its there or use default -->
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

<style>
#app {
  /* Add horizontal padding to all pages */
  padding: 0 20rem;
}

@media (max-width: 2560px) {
  #app {
    padding: 0 20rem;
    background-color: orange;
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
    background-color: rgb(107, 85, 85);
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
    background-color: rgb(3, 3, 12);
  }
}

@media (max-width: 1206px) {
  #app {
    padding: 0 8rem;
    background-color: rgb(69, 69, 139);
  }
}

@media (max-width: 1024px) {
  #app {
    padding: 0 6rem;
    background-color: green;
  }
}

@media (max-width: 768px) {
  #app {
    padding: 0 2rem;
    background-color: green;
  }
}

@media (max-width: 425px) {
  #app {
    padding: 0 2rem;
    background-color: pink;
  }
}

@media (max-width: 375px) {
  #app {
    padding: 0;
    background-color: purple;
  }
}
</style>
