import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
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
    this.chargerCategorie();
  }

  chargerCategorie() {
    this.categorieService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
  }

  addCategory() {
    this.categorieService
      .ajouterCategorie(this.newCategory)
      .subscribe((cat) => {
        this.newCategory.nomCat = '';
        this.newCategory.descriptionCat = '';
      
        // Mettez à jour la liste des catégories dans ListCategorieComponent
        this.chargerCategorie();
      });
  }
}
