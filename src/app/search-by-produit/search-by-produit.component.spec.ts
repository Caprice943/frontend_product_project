import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByProduitComponent } from './search-by-produit.component';

describe('SearchByProduitComponent', () => {
  let component: SearchByProduitComponent;
  let fixture: ComponentFixture<SearchByProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
