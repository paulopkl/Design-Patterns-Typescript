export interface Prototype {
    clone(): Prototype;
}

export class Address {
    constructor(public street: string, public num: number) {}
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): Person {
        const newObject = Object.create(this);
        return newObject;
    }

    AddAddress(address: Address): void {
        this.addresses.push(address);
    }
}

const address1 = new Address('Av. Brazil', 15);
const person1 = new Person('Paulo', 19);

person1.AddAddress(address1);

person1.addresses[0].street = 'Bla bla bla';

const person2 = person1.clone();

person2.name = 'Wiggle';
console.log(person1);
// console.log(person2);
console.log(person2.__proto__);
