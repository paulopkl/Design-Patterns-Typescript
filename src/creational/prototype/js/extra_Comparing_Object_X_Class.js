const Person = function (name, cpf, rg) {
    this.name = name;
    this.cpf = cpf;
    this.rg = rg;
};

class Person2 {
    name = 'batata';
    cpf = 'x-x';
    rg = 'xxxxx';

    constructor(name, cpf, rg) {
        this.name = name;
        this.cpf = cpf;
        this.rg = rg;
    }
}

console.log(new Person('Paulo', 'xx.xxx.xxx-x', 'xxx.xxx.xxx-xx'));
console.log(new Person2('Paulo', 'xx.xxx.xxx-x', 'xxx.xxx.xxx-xx'));
console.log(Person.__proto__);
console.log(Person2.__proto__);
