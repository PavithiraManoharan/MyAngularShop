import { Produkt } from './../shared/produkt';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent {
  @Input() produkt: Produkt;
}
