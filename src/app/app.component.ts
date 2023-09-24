import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldDisplaySearch: boolean = false;

  constructor(private router: Router) {
    // Abonnez-vous aux événements de navigation pour détecter les changements d'URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Vérifiez si l'URL actuelle correspond à la route "/produits"
        this.shouldDisplaySearch = this.router.url === '/produits';
      }
    });
  }
}
