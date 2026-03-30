import { ProductDecorator } from "./product-decorator";

export class ProductCustomDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 50;
  }

  getName(): string {
    return `${this.product.getName()} (Customizada)`;
  }
}
