const person = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const anotherPerson = Object.create(person);

console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

console.log(person === Object.getPrototypeOf(anotherPerson)); // true
