// Day 23 - TypeScript Classes - Examples

console.log('=== Day 23: TypeScript Classes ===\n');

// Basic class
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return `Hello, I'm ${this.name}, ${this.age} years old`;
    }
}

const alice = new Person("Alice", 30);
console.log('1. Basic class:', alice.greet());

// Access modifiers
class BankAccount {
    constructor(
        public accountNumber: string,
        private balance: number = 0
    ) {}
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("123456");
account.deposit(1000);
console.log('2. Bank account balance:', account.getBalance());

// Inheritance
class Animal {
    constructor(public name: string) {}
    
    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} barks: Woof!`);
    }
}

const dog = new Dog("Buddy");
dog.move(10);
dog.bark();

// Static members
class MathUtils {
    static PI = 3.14159;
    
    static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log('3. Circle area (r=5):', MathUtils.circleArea(5));

// Getters and setters
class Rectangle {
    constructor(private _width: number, private _height: number) {}
    
    get width(): number { return this._width; }
    set width(value: number) {
        if (value > 0) this._width = value;
    }
    
    get area(): number {
        return this._width * this._height;
    }
}

const rect = new Rectangle(10, 5);
console.log('4. Rectangle area:', rect.area);

console.log('\n=== Examples Complete ===');
