import { Customer } from '../customers/customer';
import { Vehicle } from './vehicle';

export class IndividualVehicle implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`);
  }
}
