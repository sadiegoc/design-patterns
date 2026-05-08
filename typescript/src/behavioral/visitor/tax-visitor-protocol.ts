import { Alcoholic } from './alcoholic';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { Shirt } from './shirt';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(o: Food): number;
  calculateTaxesForCigarette(o: Cigarette): number;
  calculateTaxesForAlcoholic(o: Alcoholic): number;
  calculateTaxesForShirt(o: Shirt): number;
}

export abstract class AbstractTaxVisitor implements TaxVisitorProtocol {
  protected getTax(price: number, tax: number): number {
    return price * (1 + tax / 100);
  }

  abstract calculateTaxesForAlcoholic(o: Alcoholic): number;
  abstract calculateTaxesForCigarette(o: Cigarette): number;
  abstract calculateTaxesForFood(o: Food): number;
  abstract calculateTaxesForShirt(o: Shirt): number;
}
