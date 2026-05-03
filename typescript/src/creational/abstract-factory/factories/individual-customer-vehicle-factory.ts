import { Customer } from '../customers/customer';
import { IndividualCustomer } from '../customers/individual-customer';
import { IndividualVehicle } from '../vehicles/individual-vehicle';
import { Vehicle } from '../vehicles/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}