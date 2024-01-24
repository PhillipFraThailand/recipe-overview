# Recipe Overview
Recipe Overview is a Vue.js application that displays recipes fetched from an API.
The recipes can be ordered by different criteria such as name and rating.

## Get Started

### Prerequisites
The project uses `yarn` as the package manager.
To get started you need these dependencies in your environment:
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Vue CLI](https://cli.vuejs.org/)

### Installation
To install the project dependencies, run the following command in the root directory of the project. It will install the dependencies listed in the package.json file.
```
yarn install
```

### Serve the application
To serve the application you will need to run the following command in the root directory of the project. It will serve the application on localhost:8080.
```
yarn serve
```

Now open the browser and navigate to localhost:8080.

## Project Structure
The project settings and config files are in the root.

The source code is in the src folder.

Folder names follow the kebab-case convention.
Pages and Components follow the PascalCase convention.
Services and other files follow the camelCase convention.

The folder structure aims to groups files used together in the same folder.
For example, the RecipeStore folder contains the files related to the RecipeStore, such as the store itself, the composables and the utils, as such:

```
├── src
│   ├── recipes-store
│   │   ├── composables.ts
│   │   ├── recipesStore.ts
│   │   └── utils.ts
│   ├── services
│   │   └── recipe-service
│   │       ├── recipeService.ts
│   │       └── utils.ts

```

Components that are specific to one page, can be grouped in a folder together with the page inside of the Components folder. For example,
```
├── src
│   ├── components
│   │   ├── a-specific-page
│   │   │   ├── SpecificPage.vue
│   │   │   └── components
│   │   │       ├── Component1.vue
│   │   │       └── Component2.vue
```

## Linting Formatting and TypeScript
The project uses ESLint and Prettier for linting and formatting.
The project uses TypeScript for type checking.

To run the linter, run the following command
```
yarn lint
```

To configure the linter, refer to the .eslintrc.js file.