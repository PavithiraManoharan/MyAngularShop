import { Produkt } from './produkt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {
  produkte: Produkt[];
  constructor() {
    this.produkte = [
      new Produkt('1', 'Staubsauger', 'Unser Top Staubsauger 2018', 100, 'assets/images/staubsauger.jpg', 99, 0),
      new Produkt('2', 'Heimwerker Bohrmaschine', 'Unsere  2017', 100, 'assets/images/bohrer2.jpg', 99, 0),
      new Produkt('3', 'Absolut 2019', 'Staubsauger 2017', 100, 'assets/images/staubsauger.jpg', 99, 0),
      new Produkt('4', 'Bohrmaschine', 'Unsere Top Bohrmaschine 2018', 100, 'assets/images/bohrmaschine.jpg', 99, 0),
      new Produkt('5', 'Autoreifen', 'Autoreifen', 100, 'assets/images/reifen.png', 99, 0),
    ];
  }

  getAll() {
    return this.produkte;
  }

  getOne(id: string) {
    return this.produkte.find(produkt => produkt.id === id);
  }
}
