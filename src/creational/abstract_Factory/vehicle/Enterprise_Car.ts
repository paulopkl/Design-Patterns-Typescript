import { Customer } from '../interfaces/customer';
import { VehicleProtocol } from './../interfaces/vehicleProtocol';

export class IndividualCar implements VehicleProtocol {
    constructor(public name: string, private readonly customer: Customer) {}

    pickUp(): void {
        console.log(`${this.name} is looking for ${this.customer.name}`);
    }
}
