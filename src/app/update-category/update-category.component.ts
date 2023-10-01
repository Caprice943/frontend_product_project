import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  currentCategory = new Categorie();
  categories!: Categorie[];
  updateIdCat!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.categorieService
      .consulterCategorie(this.activatedRoute.snapshot.params['id'])
      .subscribe((cat) => {
        this.currentCategory = cat;
        this.updateIdCat = this.currentCategory.idCat;
      });
  }

  updateCategory() {
    this.currentCategory.idCat = this.updateIdCat;
    this.categorieService
      .updateCategorie(this.currentCategory)
      .subscribe((cat) => {
        this.router.navigate(['addCategory']);
      });
  }
}
