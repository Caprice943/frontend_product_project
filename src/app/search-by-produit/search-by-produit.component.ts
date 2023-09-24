import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-search-by-produit',
  templateUrl: './search-by-produit.component.html',
  styleUrls: ['./search-by-produit.component.css']
})
export class SearchByProduitComponent implements OnInit {

  produits !: Produit[];
  productSearched !: String;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    
  }

  searchProduit(){
    this.produitService.searchProduitByNameOrCat(this.productSearched).subscribe(prods => {
      this.produits = prods;
      console.log(prods)
    })
  }

}
