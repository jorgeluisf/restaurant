import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingridients} from '../../shared/ingridients.model';
import { IngredientsService } from '../../services/ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  ingredients: Ingridients[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();

    this.subscription = this.ingredientsService.onchangedIngridient.subscribe((ingredients: Ingridients[]) => {

    this.ingredients = ingredients;
    });
  }

  ngOnDestroy (){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.ingredientsService.startedEditing.next(index);
  }

  // ngDoCheck() {
  //   // this.ingredients = [];
  //   this.ingredients = this.ingredientsService.getIngredients();
  // }

}