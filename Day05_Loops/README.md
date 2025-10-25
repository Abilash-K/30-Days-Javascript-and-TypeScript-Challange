# Day 05 - Loops

Welcome to Day 5! Today we'll master all types of loops in JavaScript - essential tools for repeating actions and processing collections of data.

## Table of Contents
- [What are Loops?](#what-are-loops)
- [For Loop](#for-loop)
- [While Loop](#while-loop)
- [Do...While Loop](#dowhile-loop)
- [For...Of Loop](#forof-loop)
- [For...In Loop](#forin-loop)
- [Loop Control Statements](#loop-control-statements)
- [Nested Loops](#nested-loops)
- [Practical Examples](#practical-examples)
- [Exercises](#exercises)

## What are Loops?

Loops are used to repeat a block of code multiple times. They're essential for:
- Processing arrays and collections
- Repeating actions a specific number of times
- Iterating until a condition is met
- Automating repetitive tasks

## For Loop

The **for** loop is the most commonly used loop. It's ideal when you know how many times you want to repeat.

### Syntax
```javascript
for (initialization; condition; increment) {
    // code to execute
}
```

### Basic Examples

```javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Count backwards
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1

// Iterate through an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Common Patterns

```javascript
// Sum of numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);  // 55

// Skip even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);  // 1, 3, 5, 7, 9
}

// Stop early with break
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);  // 1, 2, 3, 4
}
```

## While Loop

The **while** loop repeats as long as a condition is true. Use when you don't know how many iterations you need.

### Syntax
```javascript
while (condition) {
    // code to execute
    // don't forget to update the condition!
}
```

### Examples

```javascript
// Count to 5
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// Password validation
let attempts = 0;
let password = 'secret';
let userInput = '';

while (attempts < 3 && userInput !== password) {
    userInput = prompt('Enter password:');
    attempts++;
}

// Process until condition met
let number = 1;
while (number < 100) {
    number *= 2;
}
console.log(number);  // 128
```

**Warning:** Always ensure the condition will eventually become false, or you'll create an infinite loop!

```javascript
// ❌ Infinite loop - DO NOT RUN
// while (true) {
//     console.log('Forever...');
// }
```

## Do...While Loop

The **do...while** loop is similar to while, but it always executes at least once because the condition is checked after the loop body.

### Syntax
```javascript
do {
    // code to execute
} while (condition);
```

### Examples

```javascript
// Runs at least once
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 3);
// Output: 1, 2, 3

// Runs once even when condition is false
let x = 10;
do {
    console.log('This runs once');
} while (x < 5);
```

### When to Use
- Menu systems (show menu at least once)
- Input validation (ask for input at least once)
- Games (play at least one round)

## For...Of Loop

The **for...of** loop (ES6) iterates over iterable objects (arrays, strings, maps, sets, etc.). It's cleaner and more readable than traditional for loops.

### Syntax
```javascript
for (const element of iterable) {
    // code to execute
}
```

### Examples

```javascript
// Iterate over array
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}
// Output: red, green, blue

// Iterate over string
const word = 'hello';
for (const char of word) {
    console.log(char);
}
// Output: h, e, l, l, o

// With index using entries()
const fruits = ['apple', 'banana', 'orange'];
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
// Output: 0: apple, 1: banana, 2: orange
```

### Benefits
- ✅ Cleaner syntax
- ✅ No index management
- ✅ Works with any iterable
- ✅ No risk of off-by-one errors

## For...In Loop

The **for...in** loop iterates over object properties (keys). It's designed for objects, not arrays.

### Syntax
```javascript
for (const key in object) {
    // code to execute
}
```

### Examples

```javascript
// Iterate over object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// Check own properties
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
```

### ⚠️ Warning with Arrays

```javascript
// Works but not recommended for arrays
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(arr[index]);
}

// Use for...of instead
for (const value of arr) {
    console.log(value);
}
```

## Loop Control Statements

### Break
Exits the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Exit loop when i is 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

### Continue
Skips the current iteration and moves to the next.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skip when i is 3
    }
    console.log(i);
}
// Output: 1, 2, 4, 5
```

### Labeled Statements
Break or continue outer loops in nested loops.

```javascript
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop;  // Break outer loop
        }
        console.log(`${i}, ${j}`);
    }
}
```

## Nested Loops

Loops inside loops - useful for multi-dimensional data.

```javascript
// Multiplication table
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Pattern printing
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
// Output:
// *
// **
// ***
// ****
// *****

// 2D array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

## Practical Examples

### Example 1: Factorial
```javascript
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));  // 120
```

### Example 2: Fibonacci Sequence
```javascript
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(fibonacci(10));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Example 3: Find Prime Numbers
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primes = [];
for (let i = 2; i <= 20; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}
console.log(primes);  // [2, 3, 5, 7, 11, 13, 17, 19]
```

### Example 4: Reverse String
```javascript
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello'));  // olleh
```

### Example 5: Count Vowels
```javascript
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('JavaScript'));  // 3
```

## Choosing the Right Loop

| Loop Type | Best For |
|-----------|----------|
| `for` | Known number of iterations, array indices |
| `while` | Unknown iterations, condition-based |
| `do...while` | Must execute at least once |
| `for...of` | Iterating array values (modern, clean) |
| `for...in` | Iterating object properties |

## Performance Tips

1. **Cache array length** in for loops:
```javascript
// Slower
for (let i = 0; i < arr.length; i++) { }

// Faster
const len = arr.length;
for (let i = 0; i < len; i++) { }
```

2. **Use for...of** when you don't need indices
3. **Avoid modifying** the loop variable inside the loop
4. **Break early** when you find what you're looking for

## Key Takeaways

1. **for** - Best for known iterations
2. **while** - Best for condition-based iterations
3. **do...while** - Guarantees at least one execution
4. **for...of** - Modern way to iterate arrays (ES6)
5. **for...in** - For object properties only
6. **break** - Exit loop immediately
7. **continue** - Skip current iteration
8. Avoid infinite loops!

## Exercises

### Level 1
1. Iterate 0 to 10 using for, while, and do...while loops
2. Iterate 10 to 0 using for, while, and do...while loops
3. Print triangle pattern with # symbols
4. Print squares from 0 to 10 (0 x 0 = 0, 1 x 1 = 1, etc.)
5. Print only even numbers from 0 to 100
6. Print only odd numbers from 0 to 100
7. Calculate and print sum of all numbers from 0 to 100
8. Calculate and print sum of evens and odds separately

### Level 2
1. Create a grade calculator function
2. Create a season checker based on month
3. Calculate days in a month (consider leap years)
4. Generate random hexadecimal color
5. Generate random RGB color
6. Filter countries ending with 'land'
7. Create array of country name lengths
8. Create array of arrays with country info
9. Add 'land' to countries that don't have it
10. Break loop at first number greater than 100

### Level 3
1. Generate random 6-digit number
2. Generate random 6-character hex color
3. Generate random RGB color
4. Convert countries array to uppercase
5. Filter countries with exactly 7 characters
6. Reverse string or array using loops
7. Calculate sum from 1 to n
8. Calculate factorial of a number
9. Check if all array values are unique
10. Check if all array items are same type
11. Return array with only unique values
12. Count empty values in array
13. Calculate average of numbers in array
14. Create array of n random numbers
15. Create array of n unique random numbers

See `exercises.js` for detailed exercises and `solutions.js` for complete solutions.

## Resources
- [MDN: Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

**Next:** [Day 06 - Functions](../Day06_Functions/README.md)
