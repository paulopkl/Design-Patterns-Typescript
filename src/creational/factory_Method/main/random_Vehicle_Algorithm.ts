import { BicycleFactory } from '../factories/Bicicle_Factory';
import { randomNumbers } from '../utils/random_Numbers';
import { CarFactory } from '../factories/Car_Factory';
import { Vehicle } from '../vehicle/Vehicle';

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();

    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Celt Black!');
    const bicycle = bicycleFactory.getVehicle('bike');
    const cars = [car1, car2, bicycle];
    return cars[randomNumbers(cars.length)];
}
