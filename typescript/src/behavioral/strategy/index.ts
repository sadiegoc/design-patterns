import { ShoppingCart } from "./shopping-cart/shopping-cart";
import { NewDiscountStrategy } from "./shopping-cart/strategies/new-discount-strategy";

const shoppingCart = new ShoppingCart();
shoppingCart.discount = new NewDiscountStrategy();
shoppingCart.addProduct({ name: 'Produto 1', price: 100 });
shoppingCart.addProduct({ name: 'Produto 2', price: 200 });
shoppingCart.addProduct({ name: 'Produto 3', price: 300 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());