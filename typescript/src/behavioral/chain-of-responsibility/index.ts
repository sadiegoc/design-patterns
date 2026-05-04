import { CEOBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(5000);

const chainFull = new SellerBudgetHandler();
chainFull
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

const chainVip = new DirectorBudgetHandler();
chainVip.setNextHandler(new CEOBudgetHandler());

// chainFull.handle(customerBudget);

chainFull.handle(customerBudget);

console.log(customerBudget);
