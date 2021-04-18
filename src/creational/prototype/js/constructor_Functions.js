const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Mirand',
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

// const person1 = new Person('Luiz', 'Mirand', 30);
// console.log(person1.fullName());
// console.log(person1);
// console.log(person1.__proto__);

function SubPerson(firstName, lastName, age) {
    console.log(Person.call);
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'Hello';
}

SubPerson.prototype = Object.create(personPrototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new SubPerson('Hellen', 'Virand', 20);
console.log(person2);
console.log(person2.fullName());
