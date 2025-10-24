# Day 06 - Functions

Welcome to Day 6! Today we'll master functions in JavaScript - one of the most important concepts in programming.

## Table of Contents
- [What are Functions?](#what-are-functions)
- [Function Declaration](#function-declaration)
- [Function Expression](#function-expression)
- [Arrow Functions](#arrow-functions)
- [Parameters and Arguments](#parameters-and-arguments)
- [Return Values](#return-values)
- [Default Parameters](#default-parameters)
- [Rest Parameters](#rest-parameters)
- [Function Scope](#function-scope)
- [Callback Functions](#callback-functions)
- [IIFE](#iife)
- [Exercises](#exercises)

## What are Functions?

A **function** is a reusable block of code designed to perform a specific task.

**Benefits:**
- Code reusability
- Better organization
- Easier maintenance
- Abstraction of complexity

## Function Declaration

The traditional way to create functions:

```javascript
// Basic function declaration
function greet() {
    console.log('Hello!');
}

// Call the function
greet(); // "Hello!"

// Function with parameters
function greetPerson(name) {
    console.log(`Hello, ${name}!`);
}

greetPerson('Alice'); // "Hello, Alice!"
greetPerson('Bob');   // "Hello, Bob!"

// Function with return value
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result); // 8
```

**Characteristics:**
- Hoisted (can be called before declaration)
- Named functions
- Good for general-purpose functions

## Function Expression

Storing a function in a variable:

```javascript
// Function expression
const greet = function() {
    console.log('Hello!');
};

greet(); // "Hello!"

// Named function expression
const add = function sum(a, b) {
    return a + b;
};

console.log(add(2, 3)); // 5

// Anonymous function expression (more common)
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20
```

**Characteristics:**
- Not hoisted
- Can be anonymous
- Often used for callbacks

## Arrow Functions

Modern ES6 syntax for creating functions:

```javascript
// Basic arrow function
const greet = () => {
    console.log('Hello!');
};

// With parameters
const add = (a, b) => {
    return a + b;
};

// Concise body (implicit return)
const multiply = (a, b) => a * b;

// Single parameter (no parentheses needed)
const square = x => x * x;

console.log(square(5));      // 25
console.log(multiply(3, 4)); // 12
```

**Characteristics:**
- Shorter syntax
- No `this` binding (important for OOP)
- Cannot be used as constructors
- Popular in modern JavaScript

**When to Use:**
- Short, simple functions
- Callbacks
- Array methods (map, filter, etc.)

## Parameters and Arguments

**Parameters** are placeholders in function definition.
**Arguments** are actual values passed to the function.

```javascript
// Parameters: a, b
function add(a, b) {
    return a + b;
}

// Arguments: 5, 3
add(5, 3);

// Multiple parameters
function introduce(name, age, city) {
    return `I'm ${name}, ${age} years old, from ${city}`;
}

console.log(introduce('Alice', 25, 'New York'));

// No parameters
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

console.log(getCurrentTime());
```

## Return Values

Functions can return values using the `return` keyword:

```javascript
// Return a value
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum); // 8

// Return stops function execution
function checkAge(age) {
    if (age < 18) {
        return 'Too young';
    }
    return 'Old enough';
}

console.log(checkAge(15)); // "Too young"
console.log(checkAge(21)); // "Old enough"

// Return objects
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hi, I'm ${name}`;
        }
    };
}

const person = createPerson('Alice', 30);
console.log(person.greet()); // "Hi, I'm Alice"

// No return = undefined
function logMessage(msg) {
    console.log(msg);
    // No return statement
}

const result = logMessage('Hello'); // "Hello"
console.log(result);                // undefined
```

## Default Parameters

Set default values for parameters (ES6):

```javascript
// Without default (old way)
function greet(name) {
    name = name || 'Guest';
    return `Hello, ${name}!`;
}

// With default parameters (ES6)
function greetUser(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greetUser());        // "Hello, Guest!"
console.log(greetUser('Alice')); // "Hello, Alice!"

// Multiple defaults
function createUser(name = 'Unknown', age = 0, role = 'user') {
    return { name, age, role };
}

console.log(createUser());
// { name: 'Unknown', age: 0, role: 'user' }

console.log(createUser('Alice', 25));
// { name: 'Alice', age: 25, role: 'user' }

// Default can be expressions
function addTax(price, tax = price * 0.1) {
    return price + tax;
}

console.log(addTax(100));    // 110 (10% tax)
console.log(addTax(100, 20)); // 120 (custom tax)
```

## Rest Parameters

Collect multiple arguments into an array:

```javascript
// Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));          // 6
console.log(sum(1, 2, 3, 4, 5));    // 15
console.log(sum(10, 20));           // 30

// Rest with other parameters
function introduce(greeting, ...names) {
    return `${greeting}, ${names.join(' and ')}!`;
}

console.log(introduce('Hello', 'Alice', 'Bob', 'Charlie'));
// "Hello, Alice and Bob and Charlie!"

// Find max
function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(5, 2, 9, 1, 7)); // 9
```

**Note:** Rest parameter must be the last parameter.

## Function Scope

Variables inside functions are not accessible outside:

```javascript
let globalVar = 'I am global';

function myFunction() {
    let localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

myFunction();

console.log(globalVar); // Accessible
// console.log(localVar); // ❌ Error: localVar is not defined

// Parameters are local to function
function greet(name) {
    console.log(name); // Accessible inside
}

greet('Alice');
// console.log(name); // ❌ Error: name is not defined
```

## Callback Functions

A function passed as an argument to another function:

```javascript
// Simple callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

greet('Alice', function() {
    console.log('Callback executed!');
});

// Practical example
function processUser(user, successCallback, errorCallback) {
    if (user && user.name) {
        successCallback(user);
    } else {
        errorCallback('Invalid user');
    }
}

processUser(
    { name: 'Alice', age: 25 },
    (user) => console.log(`User ${user.name} processed`),
    (error) => console.log(`Error: ${error}`)
);

// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// Arrow function callback
numbers.forEach(num => console.log(num * 2));
```

## IIFE (Immediately Invoked Function Expression)

Function that runs immediately after creation:

```javascript
// Basic IIFE
(function() {
    console.log('I run immediately!');
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})('Alice');

// Arrow function IIFE
(() => {
    console.log('Arrow IIFE');
})();

// IIFE with return value
const result = (function(a, b) {
    return a + b;
})(5, 3);

console.log(result); // 8

// Use case: Module pattern
const calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        getResult: function() {
            return result;
        }
    };
})();

calculator.add(10).subtract(3);
console.log(calculator.getResult()); // 7
```

## Pure Functions

Functions without side effects:

```javascript
// Pure function (good)
function add(a, b) {
    return a + b;
}

// Same inputs always give same output
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Impure function (has side effect)
let total = 0;
function addToTotal(x) {
    total += x; // Modifies external variable
    return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (different result!)
```

## Higher-Order Functions Preview

Functions that take or return other functions (covered in Day 9):

```javascript
// Function that returns a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## Exercises

### Level 1

1. Declare a function called `fullName` that prints your full name
2. Declare a function called `addNumbers` that takes two parameters and returns their sum
3. Create a function called `areaOfCircle` that calculates and returns the area of a circle
4. Write a function called `convertCelsiusToFahrenheit`
5. Create a function that checks if a number is even or odd
6. Write a function that finds the maximum of two numbers
7. Create a function that generates a random number between min and max
8. Write a function `isPrime` that checks if a number is prime
9. Create a function that reverses a string
10. Write a function that counts vowels in a string

### Level 2

1. Create a function that takes an array and returns the sum of all elements
2. Write a function that finds the largest number in an array
3. Create a function that removes duplicates from an array
4. Write a function with unlimited arguments that returns their average
5. Create a function that capitalizes the first letter of each word
6. Write a function that checks if a string is a palindrome
7. Create a function that calculates factorial
8. Write a function that generates the Fibonacci sequence
9. Create a function that sorts an array without using built-in sort
10. Write a function that implements binary search

### Level 3

1. Create a function factory that generates specialized functions
2. Implement a curry function
3. Create a memoization function
4. Write a debounce function
5. Implement a throttle function
6. Create a pipe/compose function for function composition
7. Write a retry function that retries failed operations
8. Implement a partial application function
9. Create a promisify function
10. Write a function that implements deep cloning

## Summary

Today you learned:
- Different ways to declare functions
- Function parameters and arguments
- Default and rest parameters
- Return values
- Function scope
- Callback functions
- IIFE pattern
- Pure vs impure functions

Functions are fundamental to JavaScript. Master them well!

**Tomorrow:** We'll explore objects in depth!

---

**Congratulations!** 🎉 You've mastered functions!

[<< Day 5](../Day05_Loops/README.md) | [Day 7 >>](../Day07_Objects/README.md)
