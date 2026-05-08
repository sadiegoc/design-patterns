import { Product } from './product';
import { AbstractTaxVisitor } from './tax-visitor-protocol';

export class Alcoholic extends Product {
  constructor(protected price: number) {
    super('Alcoholic', price);
  }

  getPriceWithTaxes(visitor: AbstractTaxVisitor): number {
    return visitor.calculateTaxesForAlcoholic(this);
  }
}
