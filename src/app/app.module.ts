import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProduitService } from './services/produit.service';
import { SearchByProduitComponent } from './search-by-produit/search-by-produit.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    SearchByProduitComponent,
    AddCategorieComponent,
    UpdateCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProduitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
