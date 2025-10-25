// Day 23 - TypeScript Classes - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1 & 2. Book class
class Book {
    constructor(
        public title: string,
        public author: string,
        public pages: number
    ) {}
    
    summary(): string {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
}

const book = new Book("TypeScript Handbook", "Microsoft", 250);
console.log('1. Book:', book.summary());

// 3 & 4. Student class
class Student {
    constructor(
        public name: string,
        public age: number,
        public grades: number[]
    ) {}
    
    averageGrade(): number {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

const student = new Student("John", 20, [85, 90, 78, 92]);
console.log('2. Student average:', student.averageGrade());

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// 1. Vehicle hierarchy
class Vehicle {
    constructor(public brand: string, public model: string) {}
}

class Car extends Vehicle {
    constructor(brand: string, model: string, public doors: number) {
        super(brand, model);
    }
}

class ElectricCar extends Car {
    constructor(brand: string, model: string, doors: number, public range: number) {
        super(brand, model, doors);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 4, 350);
console.log('1. Electric car:', tesla);

// 2. BankAccount with private balance
class SecureBankAccount {
    private balance: number = 0;
    
    deposit(amount: number): void {
        if (amount > 0) this.balance += amount;
    }
    
    withdraw(amount: number): boolean {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    
    getBalance(): number {
        return this.balance;
    }
}

const bankAccount = new SecureBankAccount();
bankAccount.deposit(1000);
bankAccount.withdraw(300);
console.log('2. Balance:', bankAccount.getBalance());

// 3. Abstract Shape
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    area(): number {
        return this.width * this.height;
    }
    
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const rect = new Rectangle(10, 5);
const circle = new Circle(7);
console.log('3. Rectangle area:', rect.area());
console.log('   Circle area:', circle.area());

console.log('\n=== LEVEL 3 SOLUTIONS ===\n');

// 1. Generic Stack
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('1. Stack peek:', stack.peek());

// 2. Shopping cart system
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

class Cart {
    private items: Map<number, { product: Product; quantity: number }> = new Map();
    
    addItem(product: Product, quantity: number = 1): void {
        const existing = this.items.get(product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.set(product.id, { product, quantity });
        }
    }
    
    getTotal(): number {
        let total = 0;
        this.items.forEach(({ product, quantity }) => {
            total += product.price * quantity;
        });
        return total;
    }
}

const cart = new Cart();
cart.addItem(new Product(1, "Laptop", 999), 1);
cart.addItem(new Product(2, "Mouse", 29), 2);
console.log('2. Cart total:', cart.getTotal());

console.log('\n=== All Solutions Complete ===');
