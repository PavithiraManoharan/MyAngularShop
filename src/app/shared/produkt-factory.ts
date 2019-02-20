import { ProduktRaw } from './produkt-raw';
import { Produkt } from './produkt';
export class ProduktFactory {
  static empty(): Produkt {
    return new Produkt('', '', '', 0, '', 0, 0);
  }

  static fromObject(rawProdukt: ProduktRaw | any): Produkt {
    return new Produkt(
      rawProdukt.id,
      rawProdukt.name,
      rawProdukt.description,
      rawProdukt.price,
      rawProdukt.bild,
      rawProdukt.available,
      rawProdukt.clicks,
      rawProdukt.featured,
      rawProdukt.descriptionFull
    );
  }
}
