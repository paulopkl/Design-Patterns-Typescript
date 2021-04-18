export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {
    constructor(public street: string, public num: number) {}

    clone(): Address {
        return new Address(this.street, this.num);
    }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): Person {
        // const newObject = Object.create(this);
        const newObject = new Person(this.name, this.age);
        newObject.addresses = this.addresses.map((item) => item.clone());
        return newObject;
    }

    AddAddress(...address: Address[]): void {
        address.forEach((add) => {
            this.addresses.push(add);
        });
    }
}

const address1 = new Address('Av. Brazil', 15);
const address2 = new Address('Av. SP', 30);
const person1 = new Person('Paulo', 19);

person1.AddAddress(address1, address2);

person1.addresses[0].street = 'Bla bla bla';

const person2 = person1.clone();

person2.name = 'Wiggle';
console.log(person1);
console.log(person2);
// console.log(person2.__proto__);

/* lodash
    obj = _.cloneDeep(objPrototype)
*/
