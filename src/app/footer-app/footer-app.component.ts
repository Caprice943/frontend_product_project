import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.css'],
})
export class FooterAppComponent implements OnInit {
  public currentYear!: number;

  constructor() {}
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
