import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent implements OnInit {
  categories!: Categorie[];
  newCategory = new Categorie();

  constructor(
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categorieService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
  }

  addCategory() {
    this.categorieService
      .ajouterCategorie(this.newCategory)
      .subscribe((cat) => {
        console.log(cat);
        this.router.navigate(['addCategory']);
      });
  }
}
