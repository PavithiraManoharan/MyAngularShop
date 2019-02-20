import { ProduktService } from './../shared/produkt-service.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Produkt } from '../shared/produkt';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produkt-details',
  templateUrl: './produkt-details.component.html'
})
export class ProduktDetailsComponent implements OnInit {
  produkt: Produkt;

  constructor(
    private route: ActivatedRoute,
    private ps: ProduktService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getOne(params['id']).subscribe(p => this.produkt = p);
  }
}
