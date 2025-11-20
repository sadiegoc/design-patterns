import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumber } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.createVehicle('Fusca');
  const car2 = carFactory.createVehicle('Celta Preto');

  const bicycle1 = bicycleFactory.createVehicle('Caloi 10');
  const bicycle2 = bicycleFactory.createVehicle('Monark');

  const vehicles: Vehicle[] = [car1, car2, bicycle1, bicycle2];

  return vehicles[randomNumber(vehicles.length)]
}
