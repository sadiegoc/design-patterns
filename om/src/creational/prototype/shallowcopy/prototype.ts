export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor (public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(addr: Address): void {
    this.addresses.push(addr);
  }
}

export class Address {
  constructor (public street: string, public number: number) {}
}

const addr1 = new Address('Av. Brasil', 102);
const person1 = new Person('Luiz', 30);
person1.addAddress(addr1);
person1.addresses[0].street = 'Bla bla'; // altera addr1

const person2 = person1.clone();

person2.name = 'Joana';
console.log(person2); // Person { name: 'Joana' }
console.log(person2.name); // Joana
