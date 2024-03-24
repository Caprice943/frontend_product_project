import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css'],
})
export class ListCategorieComponent implements OnInit {
  categories!: Categorie[];

  constructor(
    private categorieService: CategorieService,
    private router: Router, public authService: AuthService
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

  supprimerCategorie(categorie: Categorie) {
    let conf = confirm('Etes-vous sûr de vouloir supprimer cette catégorie ?');
    if (conf)
      this.categorieService
        .supprimerCategorie(categorie.idCat)
        .subscribe(() => {
          console.log('Categorie supprimée');
          this.chargerCategorie();
        });
  }
}
