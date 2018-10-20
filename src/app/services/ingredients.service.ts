import { Ingridients } from "../shared/ingridients.model";
import { EventEmitter } from '@angular/core';

export class IngredientsService{
    ingredientsChanged = new EventEmitter<Ingridients[]>();
     private ingredients : Ingridients []= [
        new Ingridients('Tomatoes', 5),
        new Ingridients('Apples', 3),
      ];
      getIngredients(){
      
        return this.ingredients.slice();
    }     
      addIngredient(ingredient: Ingridients){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());    
          }
          //se guarda el arreglo en el for y en la constante i
          addIngredients(auxIngredients : Ingridients []){
           auxIngredients.forEach(Ingridients => {
             const foundIngridient = this.ingredients.find(foundIngridient =>
              foundIngridient.name === Ingridients.name
              );
              if (!foundIngridient) {
                this.ingredients.push(Ingridients);
              }else{
                foundIngridient.amount += Ingridients.amount;
              }
           });

          }
}

