import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = environment.apiURL + '/prod';
  produits!: Produit[];

  constructor(private http: HttpClient) {}

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl + '/all');
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(
      this.apiUrl + '/createProduct',
      prod,
      httpOptions
    );
  }

  supprimerProduit(id: number) {
    return this.http.delete(this.apiUrl + `/deleteProduct/${id}`, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.apiUrl + `/${id}`, httpOptions);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(
      this.apiUrl + '/updateProduct',
      prod,
      httpOptions
    );
  }

  searchProduitByNameOrCat(searchItem: String): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl + `/searchProd/${searchItem}`);
  }

  /*
  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
  }*/

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }
}
