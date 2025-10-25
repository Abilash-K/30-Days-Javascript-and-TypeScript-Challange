# Day 11 - ES6+ Features

Explore modern JavaScript features introduced in ES6 and beyond!

## Template Literals

```javascript
const name = 'John';
const age = 30;
console.log(`Hello, I'm ${name} and I'm ${age} years old`);

// Multi-line strings
const html = `
    <div>
        <h1>Title</h1>
        <p>Content</p>
    </div>
`;
```

## Arrow Functions

```javascript
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter
const square = x => x * x;

// No parameters
const greet = () => 'Hello!';
```

## Default Parameters

```javascript
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

console.log(greet());  // Hello, Guest!
console.log(greet('John'));  // Hello, John!
```

## Enhanced Object Literals

```javascript
const name = 'John';
const age = 30;

// Property shorthand
const person = { name, age };

// Method shorthand
const obj = {
    greet() {
        return 'Hello!';
    }
};

// Computed property names
const key = 'dynamicKey';
const obj = {
    [key]: 'value'
};
```

## Modules

```javascript
// Exporting
export const add = (a, b) => a + b;
export default function multiply(a, b) {
    return a * b;
}

// Importing
import multiply, { add } from './math.js';
```

## Classes

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const john = new Person('John', 30);
console.log(john.greet());
```

## Promises

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then(result => console.log(result));
```

## for...of Loop

```javascript
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}
```

## Symbol

```javascript
const sym = Symbol('description');
const obj = {
    [sym]: 'value'
};
```

## Maps and Sets

```javascript
// Map
const map = new Map();
map.set('key', 'value');
console.log(map.get('key'));

// Set
const set = new Set([1, 2, 3, 2, 1]);
console.log([...set]);  // [1, 2, 3]
```

See `examples.js`, `exercises.js`, and `solutions.js` for more.

---

**Next:** [Day 12 - Regular Expressions](../Day12_Regular_Expressions/README.md)
