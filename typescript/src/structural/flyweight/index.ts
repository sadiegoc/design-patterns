import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Diego', '642', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Núbia', '500', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Felipe', '600', 'Dom Pedro II', 'Canela');
deliveryContext(factory, 'Diego', '642', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Núbia', '500', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Felipe', '600', 'Dom Pedro II', 'Canela');
deliveryContext(factory, 'Diego', '642', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Núbia', '500', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Felipe', '600', 'Dom Pedro II', 'Canela');
deliveryContext(factory, 'Diego', '642', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Núbia', '500', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Felipe', '600', 'Dom Pedro II', 'Canela');
deliveryContext(factory, 'Diego', '642', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Núbia', '500', 'João Julião Martins', 'CG');
deliveryContext(factory, 'Felipe', '600', 'Dom Pedro II', 'Canela');

console.log();
console.log(factory.getLocations());