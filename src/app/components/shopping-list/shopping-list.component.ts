import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../../shared/ingridients.model';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients:Ingridients[] = [];

  constructor(private ingredientsService:IngredientsService) { }

  ngOnInit() {
    this.ingridients = this.ingredientsService.getIngredients();
  }
  ngDoCheck(){
    this.ingridients=this.ingredientsService.getIngredients();
  }

}
