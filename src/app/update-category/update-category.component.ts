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
    private produitService: ProduitService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {}
  updateCategory() {
    //
  }
}
