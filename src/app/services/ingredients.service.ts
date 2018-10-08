import { Ingridients } from "../shared/ingridients.model";

export class IngredientsService{
  addIngridents(newIngredient: Ingridients): any {
    throw new Error("Method not implemented.");
  }
    
  ingridients:Ingridients[] = [
    new Ingridients('Tomatos', 5),
    new Ingridients('Apples', 7),
    new Ingridients('Lemons', 7)
  ];

  getIngredients(){
      return this.ingridients.slice();
  }
  addIngredient(ingridient: Ingridients){
      this.ingridients.push(ingridient);
  }
}