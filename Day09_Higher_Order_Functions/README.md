# Day 09 - Higher Order Functions

Master functional programming with higher-order functions like map, filter, reduce, and more!

## Table of Contents
- [What are Higher Order Functions?](#what-are-higher-order-functions)
- [forEach](#foreach)
- [map](#map)
- [filter](#filter)
- [reduce](#reduce)
- [find and findIndex](#find-and-findindex)
- [some and every](#some-and-every)
- [sort](#sort)
- [Chaining Methods](#chaining-methods)

## What are Higher Order Functions?

A **higher-order function** is a function that:
1. Takes one or more functions as arguments, OR
2. Returns a function as its result

Benefits:
- Write less code
- More readable and maintainable
- Functional programming style
- Avoid mutations

## forEach

Execute a function for each array element.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10
```

## map

Transform each element and return a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Map objects
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
const names = users.map(user => user.name);
console.log(names);  // ['John', 'Jane']
```

## filter

Create a new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6]

// Filter objects
const adults = users.filter(user => user.age >= 18);
```

## reduce

Reduce array to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15

// Find max
const max = numbers.reduce((max, num) => num > max ? num : max);

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// { apple: 3, banana: 2, orange: 1 }
```

## find and findIndex

```javascript
const numbers = [1, 2, 3, 4, 5];

// find - returns first match
const found = numbers.find(num => num > 3);
console.log(found);  // 4

// findIndex - returns index of first match
const index = numbers.findIndex(num => num > 3);
console.log(index);  // 3
```

## some and every

```javascript
const numbers = [1, 2, 3, 4, 5];

// some - at least one passes test
console.log(numbers.some(num => num > 4));  // true

// every - all pass test
console.log(numbers.every(num => num > 0));  // true
console.log(numbers.every(num => num > 4));  // false
```

## sort

```javascript
// Sort numbers
const numbers = [3, 1, 4, 1, 5, 9, 2];
numbers.sort((a, b) => a - b);  // Ascending
console.log(numbers);  // [1, 1, 2, 3, 4, 5, 9]

// Sort strings
const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names);  // ['Alice', 'Bob', 'Charlie']

// Sort objects
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];
users.sort((a, b) => a.age - b.age);
```

## Chaining Methods

Combine multiple methods for powerful transformations.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)  // Get evens: [2, 4, 6, 8, 10]
    .map(num => num * 2)            // Double them: [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0);  // Sum: 60

console.log(result);  // 60
```

## Key Takeaways

1. Higher-order functions enable functional programming
2. **map** - transform elements
3. **filter** - select elements
4. **reduce** - combine elements
5. **forEach** - side effects only
6. Chain methods for complex operations
7. Always return new arrays (immutability)

See `examples.js`, `exercises.js`, and `solutions.js` for more.

---

**Next:** [Day 10 - Destructuring and Spread](../Day10_Destructuring_Spread/README.md)
