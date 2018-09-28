import { Recipe } from "../components/recipes/recipe.model";

export class RecipeService {
  private  recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'This is a simply test 1', 
          'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg'
        ),
        new Recipe(
          'A test recipe',
          'This is a simply test 2', 
          'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg'
        ),
        new Recipe(
          'A test recipe',
          'This is a simply test 3', 
          'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg'
        )
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}