import { Ingridients } from "../shared/ingridients.model";
import { EventEmitter } from '@angular/core';
import { SubjectSubscriber, Subject } from "rxjs/internal/Subject";

export class IngredientsService {

  onchangedIngridient = new Subject<Ingridients[]>();
  
  startedEditing = new Subject<number>();

  private ingredients:Ingridients[] = [
    new Ingridients('Tomatos', 5),
    new Ingridients('Apples', 7)
  ];

  getIngredients = () => [...this.ingredients];

  getIngredient = (index: number) => this.ingredients[index];

  updateIngridient(index: number, ingredient: Ingridients) {
    this.ingredients[index] = ingredient;
    this.onchangedIngridient.next(this.ingredients.slice());
  }

  addIngridient(ingredient: Ingridients) {    
    const foundIngredient = this.ingredients.find(foundIngredient => 
      foundIngredient.name === ingredient.name
    );
    if (!foundIngredient) {
      this.ingredients.push(ingredient);
      this.onchangedIngridient.next([...this.ingredients]);
    } else {
      foundIngredient.amount = parseInt(`${foundIngredient.amount}`) + parseInt(`${ingredient.amount}`);
    }
  }

  addIngridients(auxIngredients: Ingridients[]) {
    auxIngredients.forEach(ingredient => {
      const foundIngredient = this.ingredients.find(foundIngredient => 
        foundIngredient.name === ingredient.name
      );
      if (!foundIngredient) {
        this.ingredients.push(ingredient);
      } else {
        foundIngredient.amount += ingredient.amount;
      }
    });
    // this.newIngredient.emit([...this.ingredients]);
  }
  
}