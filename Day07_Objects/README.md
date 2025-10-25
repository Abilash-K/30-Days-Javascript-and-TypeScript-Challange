# Day 07 - Objects

Welcome to Day 7! Today we'll dive deep into JavaScript objects - one of the most important data structures in the language.

## Table of Contents
- [What are Objects?](#what-are-objects)
- [Creating Objects](#creating-objects)
- [Accessing Properties](#accessing-properties)
- [Modifying Objects](#modifying-objects)
- [Object Methods](#object-methods)
- [The `this` Keyword](#the-this-keyword)
- [Built-in Object Methods](#built-in-object-methods)
- [Object Destructuring](#object-destructuring)
- [Object Spreading](#object-spreading)
- [Practical Examples](#practical-examples)
- [Exercises](#exercises)

## What are Objects?

Objects are collections of key-value pairs. They're used to store related data and functionality together.

```javascript
const person = {
    name: 'John',      // property
    age: 30,           // property
    greet() {          // method
        return 'Hello!';
    }
};
```

**Use objects for:**
- Grouping related data
- Representing real-world entities
- Creating data structures
- Organizing code

## Creating Objects

### Object Literal (Most Common)

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
```

### Using `new Object()`

```javascript
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';
```

### Empty Object

```javascript
const emptyObj = {};
```

## Accessing Properties

### Dot Notation (Preferred)

```javascript
console.log(person.firstName);  // John
console.log(person.age);         // 30
```

### Bracket Notation

```javascript
console.log(person['firstName']);  // John
console.log(person['age']);        // 30
```

**When to use bracket notation:**
- Property names with spaces or special characters
- Dynamic property access
- Property names that are reserved words

```javascript
const obj = {
    'full name': 'John Doe',
    'email-address': 'john@example.com'
};

console.log(obj['full name']);      // Must use brackets
console.log(obj['email-address']);  // Must use brackets

// Dynamic access
const prop = 'age';
console.log(person[prop]);  // 30
```

## Modifying Objects

### Adding Properties

```javascript
person.country = 'USA';
person['city'] = 'New York';
```

### Updating Properties

```javascript
person.age = 31;
person['firstName'] = 'Jane';
```

### Deleting Properties

```javascript
delete person.age;
console.log(person.age);  // undefined
```

## Object Methods

Methods are functions stored as object properties.

### Defining Methods

```javascript
const calculator = {
    // Traditional function
    add: function(a, b) {
        return a + b;
    },
    
    // ES6 shorthand (preferred)
    subtract(a, b) {
        return a - b;
    },
    
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
```

## The `this` Keyword

`this` refers to the object the method belongs to.

```javascript
const user = {
    name: 'Alice',
    age: 25,
    
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    
    birthday() {
        this.age++;
        return `Now ${this.age} years old`;
    }
};

console.log(user.greet());     // Hello, I'm Alice
console.log(user.birthday());  // Now 26 years old
```

**Note:** Arrow functions don't have their own `this`, so avoid them for object methods.

```javascript
// ❌ Wrong - arrow function
const bad = {
    name: 'Test',
    greet: () => {
        return `Hello ${this.name}`;  // 'this' doesn't work!
    }
};

// ✅ Correct - regular function
const good = {
    name: 'Test',
    greet() {
        return `Hello ${this.name}`;  // 'this' works!
    }
};
```

## Built-in Object Methods

### Object.keys()
Returns array of object's keys.

```javascript
const person = { name: 'John', age: 30, city: 'NYC' };
console.log(Object.keys(person));  // ['name', 'age', 'city']
```

### Object.values()
Returns array of object's values.

```javascript
console.log(Object.values(person));  // ['John', 30, 'NYC']
```

### Object.entries()
Returns array of [key, value] pairs.

```javascript
console.log(Object.entries(person));
// [['name', 'John'], ['age', 30], ['city', 'NYC']]

// Useful for iteration
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

### Object.assign()
Copies or merges objects.

```javascript
const defaults = { theme: 'light', language: 'en' };
const userPrefs = { theme: 'dark' };

const settings = Object.assign({}, defaults, userPrefs);
console.log(settings);  // { theme: 'dark', language: 'en' }
```

### Object.freeze()
Makes object immutable.

```javascript
const config = Object.freeze({ apiKey: 'secret' });
config.apiKey = 'new';  // Silently fails
console.log(config.apiKey);  // 'secret'
```

### Object.seal()
Prevents adding/removing properties, but allows modifications.

```javascript
const obj = Object.seal({ count: 0 });
obj.count = 10;      // ✅ Works
obj.newProp = 5;     // ❌ Fails
delete obj.count;    // ❌ Fails
```

### hasOwnProperty()
Checks if object has a property.

```javascript
const obj = { name: 'John' };
console.log(obj.hasOwnProperty('name'));  // true
console.log(obj.hasOwnProperty('age'));   // false
```

## Object Destructuring

Extract properties into variables.

### Basic Destructuring

```javascript
const person = { name: 'John', age: 30, city: 'NYC' };

const { name, age } = person;
console.log(name);  // John
console.log(age);   // 30
```

### Rename Variables

```javascript
const { name: fullName, age: years } = person;
console.log(fullName);  // John
console.log(years);     // 30
```

### Default Values

```javascript
const { name, country = 'USA' } = person;
console.log(country);  // USA (default)
```

### Nested Destructuring

```javascript
const user = {
    id: 1,
    profile: {
        name: 'John',
        email: 'john@example.com'
    }
};

const { profile: { name, email } } = user;
console.log(name);   // John
console.log(email);  // john@example.com
```

## Object Spreading

Create copies and merge objects using the spread operator (`...`).

### Copy Object

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);  // { a: 1, b: 2 }
```

### Merge Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }
```

### Override Properties

```javascript
const user = { name: 'John', age: 30 };
const updated = { ...user, age: 31 };
console.log(updated);  // { name: 'John', age: 31 }
```

### Add Properties

```javascript
const user = { name: 'John' };
const withAge = { ...user, age: 30 };
console.log(withAge);  // { name: 'John', age: 30 }
```

## Practical Examples

### Example 1: Bank Account

```javascript
const bankAccount = {
    accountNumber: '123456',
    balance: 1000,
    owner: 'John Doe',
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}`;
        }
        return 'Invalid amount';
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}`;
        }
        return 'Insufficient funds';
    },
    
    getBalance() {
        return `Balance: $${this.balance}`;
    }
};
```

### Example 2: Shopping Cart

```javascript
const cart = {
    items: [],
    
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
    },
    
    removeItem(name) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
};
```

## Key Takeaways

1. Objects store key-value pairs
2. Use dot notation for simple property names
3. Use bracket notation for dynamic access
4. Methods are functions inside objects
5. `this` refers to the object
6. Object destructuring extracts properties
7. Spread operator copies/merges objects
8. Objects are passed by reference

## Exercises

### Level 1
1. Create empty object called `dog`
2. Add properties: name, legs, color, age, bark (method)
3. Get all values from the dog object
4. Create a `person` object with various properties
5. Create `personAccount` object with incomes/expenses

### Level 2
1. Find person with most skills
2. Count logged-in users
3. Count users with >= 50 points
4. Find MERN stack developers
5. Add your name to users object
6. Get all keys and values
7. Check if object has specific property

### Level 3
1. Create advanced `personAccount` with Sets
2. Create library system with books management
3. Create student registry system

See `exercises.js` for detailed exercises and `solutions.js` for complete solutions.

## Resources
- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

**Next:** [Day 08 - Scope and Closures](../Day08_Scope_Closures/README.md)
