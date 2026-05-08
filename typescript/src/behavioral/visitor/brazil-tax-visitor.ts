import { AbstractTaxVisitor } from './tax-visitor-protocol';
import { Alcoholic } from './alcoholic';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { Shirt } from './shirt';

export class BrazilTaxVisitor extends AbstractTaxVisitor {
  calculateTaxesForShirt(o: Shirt) {
    return this.getTax(o.getPrice(), 20);
  }

  calculateTaxesForAlcoholic(o: Alcoholic): number {
    return this.getTax(o.getPrice(), 50);
  }

  calculateTaxesForCigarette(o: Cigarette): number {
    return this.getTax(o.getPrice(), 150);
  }

  calculateTaxesForFood(o: Food): number {
    return this.getTax(o.getPrice(), 5);
  }
}
