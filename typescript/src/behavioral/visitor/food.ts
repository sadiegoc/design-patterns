import { Product } from './product';
import { AbstractTaxVisitor } from './tax-visitor-protocol';

export class Food extends Product {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: AbstractTaxVisitor): number {
    return visitor.calculateTaxesForFood(this);
  }
}
