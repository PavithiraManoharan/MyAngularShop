import { Produkt } from './produkt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  setCount(produkt: Produkt) {
    produkt.clicks++;
  }
}
