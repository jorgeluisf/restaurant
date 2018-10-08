import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ItemComponent } from './components/recipes/recipes-list/item/item.component';
import { IngredientsService } from './services/ingredients.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    ShoppingEditComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
