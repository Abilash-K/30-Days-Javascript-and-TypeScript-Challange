# Day 14 - Classes and Object-Oriented Programming (Simplified)

Welcome to Day 14! Today we'll learn about Object-Oriented Programming (OOP) in JavaScript in a simple, easy-to-understand way.

## Table of Contents
- [What is OOP?](#what-is-oop)
- [Classes Basics](#classes-basics)
- [Constructor](#constructor)
- [Methods](#methods)
- [The this Keyword](#the-this-keyword)
- [Getters and Setters](#getters-and-setters)
- [Inheritance](#inheritance)
- [Static Methods](#static-methods)
- [Real-World Examples](#real-world-examples)
- [Exercises](#exercises)

## What is OOP?

**Object-Oriented Programming (OOP)** is a programming style that organizes code around **objects** rather than functions and logic.

Think of it like this:
- A **Class** is like a blueprint (e.g., a blueprint for a house)
- An **Object** is the actual thing built from the blueprint (e.g., the actual house)

### Why Use OOP?

- **Organized Code**: Keeps related data and functions together
- **Reusable**: Create multiple objects from one class
- **Easy to Understand**: Models real-world things
- **Maintainable**: Changes in one place don't break everything

## Classes Basics

A class is a template for creating objects. It bundles data and functions together.

### Simple Example

```javascript
// Define a class
class Person {
    // Constructor - runs when you create a new person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method - a function inside a class
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Create objects from the class
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // "Hello, my name is Alice"
person2.greet(); // "Hello, my name is Bob"
```

## Constructor

The **constructor** is a special method that runs automatically when you create a new object.

```javascript
class Car {
    constructor(brand, model, year) {
        this.brand = brand;  // Set properties
        this.model = model;
        this.year = year;
        this.speed = 0;      // Default value
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.brand);  // "Toyota"
console.log(myCar.model);  // "Camry"
console.log(myCar.speed);  // 0
```

**Key Points:**
- Always named `constructor`
- Runs automatically when using `new`
- Use it to set initial values
- Each object gets its own copy of the data

## Methods

Methods are functions that belong to a class.

```javascript
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;  // Return this for chaining
    }
    
    subtract(num) {
        this.result -= num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

const calc = new Calculator();
calc.add(10).add(5).subtract(3);
console.log(calc.getResult()); // 12
```

## The this Keyword

`this` refers to the current object.

```javascript
class Student {
    constructor(name, grade) {
        this.name = name;    // this.name = the object's name property
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is studying`);
    }
    
    showGrade() {
        console.log(`${this.name}'s grade: ${this.grade}`);
    }
}

const student = new Student('Emma', 'A');
student.study();      // "Emma is studying"
student.showGrade();  // "Emma's grade: A"
```

**Simple Rule:** `this` = the object you're working with

## Getters and Setters

Getters and setters are special methods for reading and writing properties.

```javascript
class Circle {
    constructor(radius) {
        this._radius = radius;  // _ indicates private (by convention)
    }
    
    // Getter - access like a property
    get radius() {
        return this._radius;
    }
    
    // Setter - set like a property
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log('Radius must be positive');
        }
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
    
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);
console.log(circle.radius);        // 5 (using getter)
console.log(circle.area);          // 78.54 (using getter)

circle.radius = 10;                // Using setter
console.log(circle.area);          // 314.16

circle.radius = -5;                // "Radius must be positive"
```

**Why Use Getters/Setters?**
- Validate data before setting
- Calculate values on the fly
- Hide implementation details

## Inheritance

Inheritance lets one class get features from another class.

```javascript
// Parent class (Base class)
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Child class (inherits from Animal)
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
    
    // New method specific to Dog
    fetch() {
        console.log(`${this.name} is fetching the ball`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    
    speak() {
        console.log(`${this.name} meows: Meow!`);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
const cat = new Cat('Whiskers', 'Orange');

dog.speak();  // "Buddy barks: Woof! Woof!"
dog.eat();    // "Buddy is eating" (inherited)
dog.fetch();  // "Buddy is fetching the ball"

cat.speak();  // "Whiskers meows: Meow!"
cat.eat();    // "Whiskers is eating" (inherited)
```

**Key Concepts:**
- `extends` - creates a child class
- `super()` - calls the parent constructor
- Child gets all parent methods and properties
- Child can add new methods
- Child can override parent methods

## Static Methods

Static methods belong to the class, not to objects.

```javascript
class MathHelper {
    // Static method - call on class, not object
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static square(num) {
        return num * num;
    }
}

// Call on the class directly
console.log(MathHelper.add(5, 3));      // 8
console.log(MathHelper.multiply(4, 7)); // 28
console.log(MathHelper.square(5));      // 25

// You don't create an object:
// const helper = new MathHelper(); // Not needed!
```

**When to Use Static Methods:**
- Utility functions
- Factory methods (methods that create objects)
- Constants

## Real-World Examples

### Example 1: Bank Account

```javascript
class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push(`Deposit: +$${amount}`);
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(`Withdrawal: -$${amount}`);
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds or invalid amount');
        }
    }
    
    getBalance() {
        return this.balance;
    }
    
    showTransactions() {
        console.log(`Transaction history for ${this.owner}:`);
        this.transactions.forEach(transaction => console.log(transaction));
    }
}

const account = new BankAccount('John Doe', 1000);
account.deposit(500);
account.withdraw(200);
account.showTransactions();
```

### Example 2: Book Library

```javascript
class Book {
    constructor(title, author, pages, isRead = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    
    toggleRead() {
        this.isRead = !this.isRead;
    }
    
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" to ${this.name}`);
    }
    
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index > -1) {
            this.books.splice(index, 1);
            console.log(`Removed "${title}" from ${this.name}`);
        }
    }
    
    listBooks() {
        console.log(`\nBooks in ${this.name}:`);
        this.books.forEach((book, index) => {
            const status = book.isRead ? '✓ Read' : '○ Unread';
            console.log(`${index + 1}. ${book.getInfo()} - ${status}`);
        });
    }
    
    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }
}

const myLibrary = new Library('My Home Library');

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const book2 = new Book('1984', 'George Orwell', 328, true);
const book3 = new Book('Clean Code', 'Robert Martin', 464);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.listBooks();
```

### Example 3: Simple Game Character

```javascript
class Character {
    constructor(name, health = 100, attackPower = 10) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.attackPower = attackPower;
        this.isAlive = true;
    }
    
    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);
        target.takeDamage(this.attackPower);
    }
    
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage! Health: ${this.health}/${this.maxHealth}`);
        
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
            console.log(`${this.name} has been defeated!`);
        }
    }
    
    heal(amount) {
        if (this.isAlive) {
            this.health = Math.min(this.health + amount, this.maxHealth);
            console.log(`${this.name} heals ${amount} HP! Health: ${this.health}/${this.maxHealth}`);
        }
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, 150, 15);  // More health and attack
        this.armor = 10;
    }
    
    takeDamage(damage) {
        const reducedDamage = Math.max(damage - this.armor, 0);
        super.takeDamage(reducedDamage);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, 80, 25);  // Less health, more attack
        this.mana = 100;
    }
    
    castSpell(target) {
        if (this.mana >= 20) {
            this.mana -= 20;
            console.log(`${this.name} casts a spell!`);
            target.takeDamage(this.attackPower * 2);
        } else {
            console.log(`${this.name} doesn't have enough mana!`);
        }
    }
}

const warrior = new Warrior('Conan');
const mage = new Mage('Gandalf');

warrior.attack(mage);
mage.castSpell(warrior);
```

## Exercises

### Level 1

1. Create a `Person` class with properties: firstName, lastName, age, country, city
2. Add a method `getFullName()` that returns the full name
3. Create 3 person objects and call their getFullName methods
4. Create a `Student` class with properties: name, age, subjects (array), and skills (array)
5. Add methods to add skills and subjects to the Student class
6. Create a `Rectangle` class with width and height properties
7. Add methods to calculate area and perimeter of the rectangle
8. Create a `Temperature` class that converts Celsius to Fahrenheit and vice versa
9. Create a `ShoppingCart` class with methods to add items, remove items, and calculate total
10. Create a `Counter` class with increment, decrement, and reset methods

### Level 2

1. Create an `Animal` class and extend it to create `Dog`, `Cat`, and `Bird` classes
2. Override the `makeSound()` method in each child class with appropriate sounds
3. Create a `Vehicle` class with properties like brand, model, year
4. Extend Vehicle to create `Car` and `Motorcycle` classes with specific properties
5. Create a `BankAccount` class with deposit, withdraw, and transfer methods
6. Add validation to ensure you can't withdraw more than the balance
7. Create a `Library` class that manages a collection of books
8. Create a `TodoList` class with methods to add, remove, and mark todos as complete
9. Create a `User` class with login/logout functionality
10. Create a `Product` class for an e-commerce system with discount calculations

### Level 3

1. Create a complete `Game` class system with:
   - Character classes (Warrior, Mage, Archer)
   - Inventory system
   - Battle system
   - Level up mechanics

2. Create a `SocialMedia` class system:
   - User class with profile information
   - Post class with likes and comments
   - Follow/unfollow functionality

3. Create a `SchoolManagement` system:
   - Student class
   - Teacher class
   - Course class
   - Grade management

## Summary

Today you learned:
- What Object-Oriented Programming is
- How to create classes in JavaScript
- How constructors work
- How to add methods to classes
- The `this` keyword
- Getters and setters
- Inheritance with `extends` and `super`
- Static methods
- Real-world practical examples

**Key Principles (Simplified):**
1. **Encapsulation**: Bundle related data and functions together
2. **Inheritance**: Reuse code by extending classes
3. **Abstraction**: Hide complex details, show only what's needed
4. **Polymorphism**: Methods can work differently in child classes

**Tomorrow:** We'll explore JSON and Web Storage!

## Additional Resources

- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info OOP](https://javascript.info/classes)

---

**Congratulations!** 🎉 You now understand OOP in JavaScript!

[<< Day 13](../Day13_Error_Handling/README.md) | [Day 15 >>](../Day15_JSON_Storage/README.md)
