import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../model/categorie.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private catUrl = environment.apiURL + '/cat';

  constructor(private http: HttpClient) {}

  listeCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.catUrl + '/all');
  }

  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(
      this.catUrl + '/createCategorie',
      cat,
      httpOptions
    );
  }
}
