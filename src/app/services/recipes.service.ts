import { Recipe } from "../components/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingridients } from "../shared/ingridients.model";
import { IngredientsService } from "./ingredients.service";

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simply test 1', 
      'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
      [
        new Ingridients('Bread', 2),
        new Ingridients('Chease', 4),
      ]
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test 2', 
      'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
      [
        new Ingridients('Apple', 3)
      ]
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test 3', 
      'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
      [
        new Ingridients('Orange', 2),
        new Ingridients('Salt', 2)
      ]
    )
  ];
  constructor(private IngredientsService: IngredientsService){}

  getRecipes = () => [...this.recipes];


addIngredientsToShoppingList(ingredients: Ingridients[]){
  this.IngredientsService.addIngredients(ingredients);
}
}