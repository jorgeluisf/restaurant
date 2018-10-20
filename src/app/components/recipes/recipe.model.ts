import { Ingridients } from "../../shared/ingridients.model";

export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingridients[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingridients[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}