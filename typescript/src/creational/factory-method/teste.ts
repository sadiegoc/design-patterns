// 1. Interface do produto
interface Bebida {
  beber(): void;
}

// 2. Produtos concretos
class Cafe implements Bebida {
  beber() {
    console.log('Você está bebendo um café.');
  }
}

class Cha implements Bebida {
  beber() {
    console.log('Você está bebendo um café.');
  }
}

class ChocolateQuente implements Bebida {
  beber() {
    console.log('Você está bebendo um café.');
  }
}

// 3. Fábrica abstrata
abstract class BebidaFactory {
  abstract criarBebida(): Bebida;
}

// 4. Fábricas concretas
class CafeFactory extends BebidaFactory {
  criarBebida(): Bebida {
    return new Cafe();
  }
}

class ChaFactory extends BebidaFactory {
  criarBebida(): Bebida {
    return new Cha();
  }
}

class ChocolateQuenteFactory extends BebidaFactory {
  criarBebida(): Bebida {
    return new ChocolateQuente();
  }
}

// 5. Cliente
function pedirBebida(factory: BebidaFactory) {
  const bebida = factory.criarBebida();
  bebida.beber();
}

// Testando
const cafe = pedirBebida(new CafeFactory());
const cha = pedirBebida(new ChaFactory());
const chocolateQuente = pedirBebida(new ChocolateQuenteFactory());
