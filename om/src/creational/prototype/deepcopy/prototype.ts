export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor (public name: string, public age: number) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((item) => item.clone());
    return newObject;
  }

  addAddress(addr: Address): void {
    this.addresses.push(addr);
  }
}

export class Address implements Prototype {
  constructor (public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const addr1 = new Address('Av. Brasil', 102);

const person1 = new Person('Luiz', 30);
person1.addAddress(addr1);

const person2 = person1.clone();

person1.addresses[0].street = 'Bla bla'; // não altera addr1

person2.name = 'Joana';
console.log(person2); // Person { name: 'Joana' }
console.log(person2.addresses); // original addr: [Address { street: 'Av. Brasil', number: 102 }]

console.log(person1); // Person { name: 'Luiz' }
console.log(person1.addresses); // changed addr: [Address { street: 'Bla bla', number: 102 }]
