type userType = {
    name: string;
    age: number;
    hello(): void;
  };
  
  class User implements userType {
    
    constructor(public name: string, public age: number) {}
  
    hello(): void { console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); }
  }
  
  let user: userType = new User("Artem", 52);
  user.hello();
  
  export {};