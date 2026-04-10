"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() { console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); }
}
const user1 = new User("Alex", 52);
user1.hello();
