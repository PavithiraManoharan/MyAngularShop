import { Produkt } from './shared/produkt';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  produkt: Produkt;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(produkt: Produkt) {
    this.produkt = produkt;
    this.listOn = false;
    this.detailsOn = true;
  }
}
