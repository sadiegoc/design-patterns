import { Customer } from '../customers/customer';
import { EnterpriseCustomer } from '../customers/enterprise-customer';
import { EnterpriseVehicle } from '../vehicles/enterprise-vehicle';
import { Vehicle } from '../vehicles/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
