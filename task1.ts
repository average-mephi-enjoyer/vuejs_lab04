interface userInterface {
    name: string;
    age: number;
    hello(): void;
  }
  
  class User implements userInterface {
    
    constructor(public name: string, public age: number) {}
  
    hello(): void { console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); }
  }
  
  const user1: userInterface = new User("Alex", 52);
  user1.hello();
  
  export {};