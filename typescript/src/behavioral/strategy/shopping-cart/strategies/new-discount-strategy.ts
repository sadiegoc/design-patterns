import { ShoppingCart } from "../shopping-cart";
import { DiscountStrategy } from "../discount-strategy";

export class NewDiscountStrategy extends DiscountStrategy {
  protected discount: number = 0;
  
  getDiscount(cart: ShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }

    return total * (1 - (this.discount / 100));
  }
}
