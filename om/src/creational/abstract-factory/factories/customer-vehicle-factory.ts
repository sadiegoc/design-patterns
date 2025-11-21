import { Customer } from '../customers/customer';
import { Vehicle } from '../vehicles/vehicle';

export interface CustomerVehicleFactory {
  createVehicle(vehicleName: string, customerName: string): Vehicle;
  createCustomer(customName: string): Customer;
}
