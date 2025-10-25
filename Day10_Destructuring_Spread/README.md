# Day 10 - Destructuring and Spread

Master ES6 destructuring and spread/rest operators for cleaner, more concise code!

## Array Destructuring

```javascript
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first);  // 'red'

// Skip elements
const [, , third] = colors;

// Rest operator
const [head, ...tail] = colors;
console.log(tail);  // ['green', 'blue']
```

## Object Destructuring

```javascript
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;

// Rename
const { name: fullName } = person;

// Default values
const { country = 'USA' } = person;
```

## Spread Operator

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Function arguments
Math.max(...[1, 2, 3, 4, 5]);  // 5
```

## Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5);  // 15
```

See `examples.js`, `exercises.js`, and `solutions.js` for more.

---

**Next:** [Day 11 - ES6+ Features](../Day11_ES6_Features/README.md)
