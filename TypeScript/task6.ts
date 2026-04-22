// ADAPTER
interface IDistanceCalculator {
    calculateDistance(x1: number, y1: number, x2: number, y2: number): number;
}

class OldDistanceCalculator {
    public getDistanceInMiles(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) / 1.609;
    }
}

class DistanceAdapter implements IDistanceCalculator {
    private oldCalculator: OldDistanceCalculator;

    constructor(oldCalculator: OldDistanceCalculator) { this.oldCalculator = oldCalculator; }

    calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        let miles = this.oldCalculator.getDistanceInMiles(x1, y1, x2, y2);
        return miles * 1.609;
    }
}

function printDistance(calculator: IDistanceCalculator, x1: number, y1: number, x2: number, y2: number): void {
    let km = calculator.calculateDistance(x1, y1, x2, y2);
    console.log(`Distance: ${km.toFixed(2)} km`);
}


// STRATEGY
interface ISortStrategy {
    sort(data: number[]): number[];
}

class BubbleSort implements ISortStrategy {
    sort(data: number[]): number[] {
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

class QuickSort implements ISortStrategy {
    sort(data: number[]): number[] {
        if (data.length <= 1) return data;
        let op = data[Math.floor(data.length / 2)];
        let left = data.filter((x) => x < op);
        let middle = data.filter((x) => x === op);
        let right = data.filter((x) => x > op);
        return [...this.sort(left), ...middle, ...this.sort(right)];
    }
}

class Sorter {
    private strategy: ISortStrategy;

    constructor(strategy: ISortStrategy) { this.strategy = strategy; }

    setStrategy(strategy: ISortStrategy): void { this.strategy = strategy; }

    sort(data: number[]): number[] { return this.strategy.sort(data); }
}

// OBSERVER
interface IObserver {
    update(event: string): void;
}

interface ISubject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    notify(event: string): void;
}

class Shop implements ISubject {
    private observers: IObserver[] = [];

    subscribe(observer: IObserver): void { this.observers.push(observer); }

    unsubscribe(observer: IObserver): void { this.observers = this.observers.filter((obs) => obs !== observer); }

    notify(event: string): void {
        for (let observer of this.observers)
            observer.update(event);
    }

    public newArrival(productName: string): void {
        const event = `New arrival: ${productName}`;
        console.log(`Shop: ${event}`);
        this.notify(event);
    }
}

class Customer implements IObserver {
    constructor(private name: string) {}

    update(event: string): void {
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

export {};