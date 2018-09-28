import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../../shared/ingridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients:Ingridients[] = [
    new Ingridients('Tomatos', 5),
    new Ingridients('Apples', 7),
    new Ingridients('Lemons', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
