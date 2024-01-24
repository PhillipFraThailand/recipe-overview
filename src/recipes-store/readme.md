# Store architecture decisions
### Type of store
For the recipes store, it's been decided to go with a custom object for the simplicity of the setup.

### How to use
The store is a simple object, that is passed to the Vue application via the provide/inject mechanism of Vue 3 inside of the `main.js` found in `/src`.

#### Initial state
The store is initialized with an empty `recipes array`, `error state`, `loading state` and a default `orderBy` value.

#### Loading data
To load data, the store exposes a `fetchAndSaveRecipes()` method imported from the `recipesService` found in `/src/services/recipes-service/recipesService.ts`.

As of now, the pages using the store will call the `fetchAndSaveRecipes()`. This is to not prematurely load the data, if it's not needed.

#### Sorting data
To sort the data, the store exposes a value `orderBy` that is set to how the data should be sorted. To change this the store exposes a `setOrderBy()` method that takes a string as a parameter. When the string is changed in the stores state, the store has a watcher, that will call a `sortRecipes()` method that will sort the recipes array based on the new `orderBy` value.

This allows the application to be fully aligned on how the user prefers to see the data.