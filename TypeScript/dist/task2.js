"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() { console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); }
}
let user = new User("Artem", 52);
user.hello();
