import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { SearchByProduitComponent } from './search-by-produit/search-by-produit.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'addProduit', component: AddProduitComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'searchProduit', component : SearchByProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}