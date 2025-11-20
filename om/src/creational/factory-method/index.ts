import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumber } from './utils/random-numbers';

const customerNames = [
  'Ana',
  'Joana',
  'Helena',
  'João',
];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumber(customerNames.length)]
  vehicle.pickUp(name);
  vehicle.stop();

  console.log('---');
}
