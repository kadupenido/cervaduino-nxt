import { Connection } from 'mongoose';
import { RecipeSchema } from './schemas/recipe.schema';

export const recipeProviders = [
  {
    provide: 'RECIPE_MODEL',
    useFactory: (connection: Connection) => {
      return connection.model('Recipe', RecipeSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
