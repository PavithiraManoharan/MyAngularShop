export class Produkt {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public bild: string,
    public available: number,
    public clicks?: number,
    public featured?: boolean,
    public descriptionFull?: string
  ) {}
}
