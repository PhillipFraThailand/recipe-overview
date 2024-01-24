import { Recipe, OrderBy, Difficulty } from '@/types/recipeTypes';

// In order to sort recipes by difficulty, we need to map the difficulty to a number.
// This way we can compare just the numbers.
const difficultyMap: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const sortRecipes = (recipes: Recipe[], orderBy: OrderBy) => {
  switch (orderBy) {
    case 'asc':
      recipes.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'desc':
      recipes.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating':
      recipes.sort((a, b) => b.rating - a.rating);
      break;
    case 'difficulty':
      recipes.sort((a, b) => {
        // Lowercase input to match the difficultyMap always.
        const lowercaseDifficultyA = a.difficulty.toLocaleLowerCase() as Difficulty;
        const lowercaseDifficultyB = b.difficulty.toLocaleLowerCase() as Difficulty;
        return difficultyMap[lowercaseDifficultyA] - difficultyMap[lowercaseDifficultyB];
      });
      break;
    default:
      break;
  }
};

export const anotherUtil = () => { /** */ };
