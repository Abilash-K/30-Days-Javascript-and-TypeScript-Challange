# Day 01 - Introduction to JavaScript

Welcome to Day 1 of the 30 Days JavaScript and TypeScript Challenge! Today, we'll cover the fundamentals of JavaScript.

## Table of Contents
- [What is JavaScript?](#what-is-javascript)
- [Setting Up](#setting-up)
- [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
- [Variables](#variables)
- [Data Types](#data-types)
- [Comments](#comments)
- [Console Methods](#console-methods)
- [Exercises](#exercises)

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's one of the core technologies of the World Wide Web, alongside HTML and CSS.

**Key Features:**
- Lightweight and interpreted
- Object-oriented with prototype-based inheritance
- Dynamic typing
- First-class functions
- Event-driven and asynchronous

## Setting Up

**Tools you'll need:**
1. **Web Browser** - Chrome, Firefox, Safari, or Edge
2. **Code Editor** - VS Code (recommended), Sublime Text, or Atom
3. **Node.js** - For running JavaScript outside the browser

**Browser Console:**
- Chrome/Edge: `Ctrl+Shift+J` (Windows) or `Cmd+Option+J` (Mac)
- Firefox: `Ctrl+Shift+K` (Windows) or `Cmd+Option+K` (Mac)

## Adding JavaScript to a Web Page

### Inline JavaScript
```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="alert('Hello!')">Click me</button>
</body>
</html>
```

### Internal JavaScript
```html
<!DOCTYPE html>
<html>
<head>
    <script>
        console.log('Hello from head');
    </script>
</head>
<body>
    <h1>My Page</h1>
    <script>
        console.log('Hello from body');
    </script>
</body>
</html>
```

### External JavaScript
```html
<!DOCTYPE html>
<html>
<body>
    <script src="script.js"></script>
</body>
</html>
```

**Best Practice:** Place scripts at the bottom of the body or use `defer` attribute.

## Variables

Variables are containers for storing data values. JavaScript has three ways to declare variables:

### var (old way - avoid in modern code)
```javascript
var name = 'John';
var age = 25;
```

### let (block-scoped, reassignable)
```javascript
let country = 'USA';
let year = 2024;
year = 2025; // Can be reassigned
```

### const (block-scoped, constant)
```javascript
const PI = 3.14159;
const GRAVITY = 9.81;
// PI = 3.14; // Error: Cannot reassign
```

**Variable Naming Rules:**
- Must start with a letter, underscore (_), or dollar sign ($)
- Can contain letters, numbers, underscores, and dollar signs
- Case-sensitive (`name` and `Name` are different)
- Cannot use reserved keywords (like `let`, `const`, `function`, etc.)
- Use camelCase for variable names (`firstName`, `totalPrice`)

**Examples:**
```javascript
// Valid variable names
let firstName = 'John';
let _privateVar = 'hidden';
let $price = 99.99;
let user123 = 'active';

// Invalid variable names
// let 123user = 'test';    // Cannot start with number
// let first-name = 'John'; // Cannot use hyphen
// let let = 'keyword';     // Cannot use reserved word
```

## Data Types

JavaScript has **dynamic typing** - you don't need to specify the type of a variable.

### Primitive Data Types

1. **Number** - Integers and floating-point numbers
   ```javascript
   let age = 25;
   let price = 19.99;
   let negative = -10;
   ```

2. **String** - Text data
   ```javascript
   let name = 'Alice';
   let message = "Hello World";
   let template = `My name is ${name}`;
   ```

3. **Boolean** - true or false
   ```javascript
   let isActive = true;
   let isComplete = false;
   ```

4. **Undefined** - Variable declared but not assigned
   ```javascript
   let x;
   console.log(x); // undefined
   ```

5. **Null** - Intentional absence of value
   ```javascript
   let emptyValue = null;
   ```

6. **Symbol** - Unique identifier (ES6)
   ```javascript
   let id = Symbol('id');
   ```

7. **BigInt** - Large integers (ES2020)
   ```javascript
   let bigNumber = 9007199254740991n;
   ```

### Checking Data Types
```javascript
console.log(typeof 42);           // "number"
console.log(typeof 'Hello');      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (historical bug)
console.log(typeof Symbol('id')); // "symbol"
```

## Comments

Comments are used to explain code and make it more readable.

### Single-line comments
```javascript
// This is a single-line comment
let x = 5; // Comment after code
```

### Multi-line comments
```javascript
/*
This is a multi-line comment
It can span multiple lines
Used for longer explanations
*/
let y = 10;
```

### Documentation comments
```javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}
```

## Console Methods

The console object provides access to the browser's debugging console.

### console.log()
```javascript
console.log('Hello, World!');
console.log(42);
console.log(true);
console.log('Age:', 25);
console.log('Multiple', 'values', 'can', 'be', 'logged');
```

### console.error()
```javascript
console.error('This is an error message');
```

### console.warn()
```javascript
console.warn('This is a warning');
```

### console.info()
```javascript
console.info('This is an informational message');
```

### console.table()
```javascript
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
];
console.table(users);
```

### console.clear()
```javascript
console.clear(); // Clears the console
```

### console.time() and console.timeEnd()
```javascript
console.time('Loop timer');
for (let i = 0; i < 1000000; i++) {
    // some operation
}
console.timeEnd('Loop timer');
```

### console.group() and console.groupEnd()
```javascript
console.group('User Details');
console.log('Name: John');
console.log('Age: 25');
console.groupEnd();
```

## Exercises

### Level 1
1. Write a single line comment which says, "comments can make code readable"
2. Write another single comment which says, "Welcome to 30 Days of JavaScript"
3. Write a multiline comment which says, "comments can make code readable, easy to reuse and informative"
4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigned values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

### Level 2
1. Using console.log() print out the following statement:
   ```
   The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
   ```
2. Using console.log() print out the following quote by Mother Teresa:
   ```
   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
   ```
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both 'python' and 'jargon'
6. I hope this course is not full of jargon. Check if 'jargon' is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.

### Level 3
1. Use console.log() and escape characters to print the following pattern:
   ```
   1 1 1 1 1
   2 1 2 4 8
   3 1 3 9 27
   4 1 4 16 64
   5 1 5 25 125
   ```
2. Use substr to slice out the phrase 'because because because' from the following sentence:
   ```
   'You cannot end a sentence with because because because is a conjunction'
   ```

## Summary

Today you learned:
- What JavaScript is and why it's important
- How to set up your development environment
- How to add JavaScript to web pages
- Variables and how to declare them with `let`, `const`, and `var`
- Primitive data types in JavaScript
- How to write comments
- Various console methods for debugging

**Tomorrow:** We'll dive deep into data types and explore strings, numbers, and type conversion in detail.

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Congratulations!** 🎉 You've completed Day 1 of the challenge. Keep up the great work!

[<< Home](../README.md) | [Day 2 >>](../Day02_DataTypes/README.md)
