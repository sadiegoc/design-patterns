import { AbstractTaxVisitor } from './tax-visitor-protocol';
import { Alcoholic } from './alcoholic';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { Shirt } from './shirt';

export class USTaxVisitor extends AbstractTaxVisitor {
  calculateTaxesForShirt(o: Shirt): number {
    return this.getTax(o.getPrice(), 10);
  }

  calculateTaxesForAlcoholic(o: Alcoholic): number {
    return this.getTax(o.getPrice(), 40);
  }

  calculateTaxesForCigarette(o: Cigarette): number {
    return this.getTax(o.getPrice(), 80);
  }

  calculateTaxesForFood(o: Food): number {
    return this.getTax(o.getPrice(), 2);
  }
}
