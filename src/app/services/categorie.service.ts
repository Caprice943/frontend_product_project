import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);

  constructor(private http: HttpClient) {}

  listeCategories(): Observable<Categorie[]> {
    this.http.get<Categorie[]>(this.catUrl + '/all').subscribe((cats) => {
      this.categoriesSubject.next(cats);
    });
    return this.categoriesSubject.asObservable();
  }

  
  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(
      this.catUrl + '/createCategorie',
      cat,
      httpOptions
    ).pipe(
      tap(() => {
        const currentCategories = this.categoriesSubject.value;
        currentCategories.push(cat);
        this.categoriesSubject.next(currentCategories);
      })
    );
  }

  consulterCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.catUrl  + `/${id}`, httpOptions);
  }

  updateCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(
      this.catUrl + '/updateCategory',
      cat,
      httpOptions
    );
  }

  supprimerCategorie(id : number){
    return this.http.delete<Categorie>( this.catUrl + '/deleteCategorie' + `/${id}`);
  }
}
