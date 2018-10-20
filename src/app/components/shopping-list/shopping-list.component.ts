import { Component, OnInit } from '@angular/core';
import {Ingridients} from '../../shared/ingridients.model';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingridients[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();

    this.ingredientsService.ingredientsChanged
    .subscribe((ingredients: Ingridients[]) => {
      this.ingredients = ingredients;
    });

  }

  // ngDoCheck() {
  //   // this.ingredients = [];
  //   this.ingredients = this.ingredientsService.getIngredients();
  // }

}




