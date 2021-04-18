const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Mirand',
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const anotherPerson = Object.create(personPrototype);

anotherPerson.firstName = 'Zoe';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.__proto__);
