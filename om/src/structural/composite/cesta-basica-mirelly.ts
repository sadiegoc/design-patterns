export abstract class CestaBasicaMirelly {
  abstract calcularValor(): number;
}

export class ItemCesta extends CestaBasicaMirelly {
  constructor(private nome: string, private valor: number) {
    super();
  }

  calcularValor(): number {
      return this.valor;
  }
}

export class CestaBasica extends CestaBasicaMirelly {
  private readonly children: CestaBasicaMirelly[] = [];

  add(...children: CestaBasicaMirelly[]): void {
    children.forEach((child) => this.children.push(child));
  }

  calcularValor(): number {
      return this.children.reduce((acc, item) => acc + item.calcularValor(), 0);
  }
}

const feijao = new ItemCesta('Feijão', 7.5);
const arroz = new ItemCesta('Arroz', 5.0);
const macarrao = new ItemCesta('Macarrão', 4.0);
const carne = new ItemCesta('Carne', 20.0);
const leite = new ItemCesta('Leite', 3.5);

const cestaBasica = new CestaBasica();

cestaBasica.add(feijao, arroz, macarrao, carne, leite);

console.log('Valor total da cesta básica da Mirelly: R$ ', cestaBasica.calcularValor());
