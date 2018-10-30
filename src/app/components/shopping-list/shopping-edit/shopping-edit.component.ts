import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { Ingridients } from '../../../shared/ingridients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  private subscription: Subscription;

  

  // editing item
  editedItem: Ingridients;

  // form
  @ViewChild('f') slForm: NgForm;
  editMode: boolean = false;
  indexEditedItem: number;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientsService.startedEditing
      .subscribe((index: number) => {
        this.indexEditedItem = index;
        this.editedItem = this.ingredientsService.getIngredient(index);
        this.editMode = true;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
   const value = form.value;
    const newIngridient = new Ingridients(value.name, value.amount);
    //this.ingredientsService.addIngridient(newIngridient);
    // this.ingredientsService.getIngredients();
    
    if(this.editMode){
      this.ingredientsService.updateIngridient(this.indexEditedItem, newIngridient);
    }else{
      this.ingredientsService.addIngridient(newIngridient);
    }
  }

}