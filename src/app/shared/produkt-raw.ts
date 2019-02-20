export interface ProduktRaw {
  id: string;
  name: string;
  description: string;
  price: number;
  bild: string;
  available: number;
  clicks?: number;
  featured?: boolean;
  descriptionFull?: string;
}
