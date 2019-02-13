import { Component, OnInit } from '@angular/core';
import { ProduktService } from '.././shared/produkt-service.service';

import { Produkt } from '../shared/produkt';

@Component({
  selector: 'app-produkt-liste',
  templateUrl: './produkt-liste.component.html'
})
export class ProduktListeComponent implements OnInit {

  produkte: Produkt[];

  constructor(private ps: ProduktService) {
  }

  ngOnInit() {
    this.produkte = this.ps.getAll();
  }

}
