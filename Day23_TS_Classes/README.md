# Day 23 - TypeScript Classes

Object-Oriented Programming with TypeScript - classes with type safety!

## Table of Contents
- [Class Basics](#class-basics)
- [Access Modifiers](#access-modifiers)
- [Inheritance](#inheritance)
- [Abstract Classes](#abstract-classes)
- [Static Members](#static-members)
- [Getters and Setters](#getters-and-setters)
- [Best Practices](#best-practices)

## Class Basics

```typescript
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return `Hello, I'm ${this.name}`;
    }
}

const person = new Person("Alice", 30);
console.log(person.greet());
```

## Access Modifiers

```typescript
class BankAccount {
    public accountNumber: string;        // Accessible everywhere
    private balance: number;             // Only within class
    protected owner: string;             // Within class and subclasses
    
    constructor(accountNumber: string, owner: string) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = 0;
    }
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    getBalance(): number {
        return this.balance;
    }
}
```

### Shorthand Constructor

```typescript
class User {
    constructor(
        public id: number,
        public name: string,
        private email: string
    ) {}
}
```

## Inheritance

```typescript
class Animal {
    constructor(public name: string) {}
    
    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
    
    bark(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.move(10);
dog.bark();
```

## Abstract Classes

```typescript
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    
    describe(): string {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
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
```

## Static Members

```typescript
class MathUtils {
    static PI = 3.14159;
    
    static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
```

## Getters and Setters

```typescript
class Temperature {
    private _celsius: number = 0;
    
    get celsius(): number {
        return this._celsius;
    }
    
    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    }
    
    get fahrenheit(): number {
        return this._celsius * 9/5 + 32;
    }
    
    set fahrenheit(value: number) {
        this.celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);  // 77
```

## Best Practices

1. **Use access modifiers appropriately**
2. **Prefer composition over inheritance**
3. **Keep classes focused (Single Responsibility)**
4. **Use readonly for immutable properties**
5. **Leverage type inference**

## Resources

- [TypeScript Classes](https://www.typescriptlang.org/docs/handbook/classes.html)

---

**Next:** [Day 24 - Generics](../Day24_Generics/README.md)
