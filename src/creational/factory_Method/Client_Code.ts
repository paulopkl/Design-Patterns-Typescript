import { CarFactory } from './factories/Car_Factory';
// import { Car } from './vehicle/Car';

import { randomCarAlgorithm } from './main/random_Vehicle_Algorithm';
import { randomNumbers } from './utils/random_Numbers';

const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joanna');
// fusca.stop();

// const fusca = new Car('Fusca');
// fusca.pickUp('Joanna');
// fusca.stop();

const customerNames = ['Ana', 'Joana', 'Helena', 'John'];

for (let i = 0; i < 10; i++) {
    const vehicle = randomCarAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();
    const newCar = carFactory.pickUp(name, `A NEW CAR ${randomNumbers(100)}`);
    newCar.stop();
    console.log('---');
    // console.log(vehicle);
}
