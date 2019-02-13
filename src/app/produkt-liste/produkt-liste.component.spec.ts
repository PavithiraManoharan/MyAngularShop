import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktListeComponent } from './produkt-liste.component';

describe('ProduktListeComponent', () => {
  let component: ProduktListeComponent;
  let fixture: ComponentFixture<ProduktListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
