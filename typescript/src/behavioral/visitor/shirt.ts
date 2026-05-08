import { Product } from './product';
import { AbstractTaxVisitor } from './tax-visitor-protocol';

export class Shirt extends Product {
  constructor(protected price: number) {
    super('Shirt', price);
  }

  getPriceWithTaxes(visitor: AbstractTaxVisitor): number {
    return visitor.calculateTaxesForShirt(this);
  }
}
