import { ShoppingCart } from "./shopping-cart";

export class DiscountStrategy {
  protected discount: number = 0;

  getDiscount(cart: ShoppingCart): number {
    return cart.getTotal();
  }
}
