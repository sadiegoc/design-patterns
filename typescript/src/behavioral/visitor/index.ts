import { Alcoholic } from './alcoholic';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { Shirt } from './shirt';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(30);
const cigarette = new Cigarette(5);
const alcoholic = new Alcoholic(20);
const shirt = new Shirt(50);

const cart = [food, alcoholic, cigarette, shirt];

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const totalWithoutTaxes = cart.reduce((sum, item) => sum + item.getPrice(), 0);

const totalWithBrazilTaxes = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);

const totalWithUSTaxes = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
  0,
);

console.log('Total without taxes: ', totalWithoutTaxes);
console.log('Total with Brazil taxes: ', totalWithBrazilTaxes);
console.log('Total with US taxes: ', totalWithUSTaxes);
