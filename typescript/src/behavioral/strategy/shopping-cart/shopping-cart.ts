import { ProductProtocol } from "./product-protocol";
import { DiscountStrategy } from "./discount-strategy";

export class ShoppingCart {
  private products: ProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
