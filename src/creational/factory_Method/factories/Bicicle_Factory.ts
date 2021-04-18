import { Bicycle } from '../vehicle/Bicycle';
import { Vehicle } from '../vehicle/Vehicle';
import { VehicleFactory } from './Vehicle_Factory';

export class BicycleFactory extends VehicleFactory {
    getVehicle(bikeName: string): Vehicle {
        return new Bicycle(bikeName);
    }
}
