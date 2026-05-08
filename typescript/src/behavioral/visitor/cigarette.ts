import { Product } from './product';
import { AbstractTaxVisitor } from './tax-visitor-protocol';

export class Cigarette extends Product {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: AbstractTaxVisitor): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
