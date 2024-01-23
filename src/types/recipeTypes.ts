// Raw type received from the recipe API.
export type RawRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

// The type used in our app. prepTimeMinutes and cookTimeMinutes are combined into totalTimeToMake.
export type Recipe = Pick<RawRecipe, 'name' | 'rating' | 'image' | 'difficulty'>
  & { totalTimeToMake: number };
