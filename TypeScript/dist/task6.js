"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OldDistanceCalculator {
    getDistanceInMiles(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) / 1.609;
    }
}
class DistanceAdapter {
    constructor(oldCalculator) { this.oldCalculator = oldCalculator; }
    calculateDistance(x1, y1, x2, y2) {
        let miles = this.oldCalculator.getDistanceInMiles(x1, y1, x2, y2);
        return miles * 1.609;
    }
}
function printDistance(calculator, x1, y1, x2, y2) {
    let km = calculator.calculateDistance(x1, y1, x2, y2);
    console.log(`Distance: ${km.toFixed(2)} km`);
}
class BubbleSort {
    sort(data) {
        let arr = [...data];
        for (let i = 0; i < arr.length; i++)
            for (let j = 0; j < arr.length - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
        return arr;
    }
}
class QuickSort {
    sort(data) {
        if (data.length <= 1)
            return data;
        let op = data[Math.floor(data.length / 2)];
        let left = data.filter((x) => x < op);
        let middle = data.filter((x) => x === op);
        let right = data.filter((x) => x > op);
        return [...this.sort(left), ...middle, ...this.sort(right)];
    }
}
class Sorter {
    constructor(strategy) { this.strategy = strategy; }
    setStrategy(strategy) { this.strategy = strategy; }
    sort(data) { return this.strategy.sort(data); }
}
class Shop {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) { this.observers.push(observer); }
    unsubscribe(observer) { this.observers = this.observers.filter((obs) => obs !== observer); }
    notify(event) {
        for (let observer of this.observers)
            observer.update(event);
    }
    newArrival(productName) {
        const event = `New arrival: ${productName}`;
        console.log(`Shop: ${event}`);
        this.notify(event);
    }
}
class Customer {
    constructor(name) {
        this.name = name;
    }
    update(event) {
        console.log(`Customer ${this.name} received: "${event}"`);
    }
}
// example
console.log("ADAPTER");
let oldCalc = new OldDistanceCalculator();
let adapter = new DistanceAdapter(oldCalc);
printDistance(adapter, 0, 0, 3, 4);
console.log("\nSTRATEGY");
let data = [5, 2, 9, 1, 5, 6];
let sorter = new Sorter(new BubbleSort());
console.log("BubbleSort:", sorter.sort(data));
sorter.setStrategy(new QuickSort());
console.log("QuickSort:", sorter.sort(data));
console.log("\nOBSERVER");
let shop = new Shop();
let alice = new Customer("Alice");
let bob = new Customer("Bob");
shop.subscribe(alice);
shop.subscribe(bob);
shop.newArrival("TypeScript Patterns Book");
shop.unsubscribe(bob);
shop.newArrival("Clean Code Mug");
