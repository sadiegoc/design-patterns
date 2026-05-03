import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 52.99 });
seller1.addProduct({ id: '2', name: 'Short', price: 84.99 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Boné', price: 45.99 });
seller2.addProduct({ id: '4', name: 'Tênis', price: 149.99 });

mediator.addSeller(seller1, seller2);

// mediator.showProducts();

const buyer = new Buyer(mediator);
seller2.viewProducts();

seller2.buy('2');
seller2.buy('4');

seller2.viewProducts();
