// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(...products: ProductComponent[]): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent{
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const idx = this.children.indexOf(product);

    if (idx !== -1) this.children.slice(idx, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const camiseta = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('Bicicleta', 380);
const carro = new ProductLeaf('Carro', 29000);

const caixaProdutos = new ProductComposite();
caixaProdutos.add(camiseta, bicicleta, carro);

console.log('-----------------------');
console.log(caixaProdutos);
console.log(caixaProdutos.getPrice());
console.log('-----------------------');

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);

const outraCaixa = new ProductComposite();
outraCaixa.add(tablet, kindle);

console.log('-----------------------');
console.log(outraCaixa);
console.log(outraCaixa.getPrice());
console.log('-----------------------');

caixaProdutos.add(outraCaixa);

console.log('-----------------------');
console.log(caixaProdutos);
console.log(caixaProdutos.getPrice());
console.log('-----------------------');
