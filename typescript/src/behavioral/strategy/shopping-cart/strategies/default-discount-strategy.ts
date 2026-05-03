import { ShoppingCart } from "../shopping-cart";
import { DiscountStrategy } from "../discount-strategy";

export class DefaultDiscountStrategy extends DiscountStrategy {
  protected discount: number = 0;
  
  getDiscount(cart: ShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total >= 300) {
      this.discount = 30;
    }

    return total * (1 - (this.discount / 100));
  }
}
