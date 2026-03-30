import { ProductCustomDecorator } from './product-custom-decorator';
import { ProductStampDecorator } from './product-stamp-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtCustom = new ProductCustomDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(tShirtCustom.getPrice(), tShirtCustom.getName());
