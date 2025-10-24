# Day 04 - Arrays

Arrays are one of the most important data structures in JavaScript. Today we'll learn everything about arrays!

## Table of Contents
- [What are Arrays?](#what-are-arrays)
- [Creating Arrays](#creating-arrays)
- [Accessing Elements](#accessing-elements)
- [Array Properties](#array-properties)
- [Adding and Removing Elements](#adding-and-removing-elements)
- [Array Methods](#array-methods)
- [Iterating Arrays](#iterating-arrays)
- [Multi-dimensional Arrays](#multi-dimensional-arrays)
- [Exercises](#exercises)

## What are Arrays?

An **array** is an ordered collection of items. Arrays can store multiple values in a single variable.

```javascript
// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Array of strings
let fruits = ['apple', 'banana', 'orange'];

// Mixed array (not recommended)
let mixed = [1, 'hello', true, null];
```

## Creating Arrays

### Array Literal (Preferred)
```javascript
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
```

### Array Constructor
```javascript
let arr1 = new Array();        // Empty array
let arr2 = new Array(5);       // Array with 5 empty slots
let arr3 = new Array(1, 2, 3); // [1, 2, 3]
```

### Array.of()
```javascript
let arr = Array.of(1, 2, 3);   // [1, 2, 3]
```

### Array.from()
```javascript
let str = 'hello';
let chars = Array.from(str);   // ['h', 'e', 'l', 'l', 'o']

let range = Array.from({length: 5}, (_, i) => i + 1);
// [1, 2, 3, 4, 5]
```

## Accessing Elements

Arrays use **zero-based indexing**.

```javascript
let fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits[0]);  // 'apple' (first element)
console.log(fruits[1]);  // 'banana'
console.log(fruits[3]);  // 'mango' (last element)

// Negative indexing (not standard, use length)
console.log(fruits[fruits.length - 1]); // 'mango' (last)
console.log(fruits[fruits.length - 2]); // 'orange' (second to last)
```

## Array Properties

### length
```javascript
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length);  // 3

// Modify length
fruits.length = 2;
console.log(fruits);  // ['apple', 'banana']

fruits.length = 5;
console.log(fruits);  // ['apple', 'banana', empty × 3]
```

## Adding and Removing Elements

### Adding Elements

```javascript
let fruits = ['apple', 'banana'];

// push() - add to end
fruits.push('orange');
console.log(fruits);  // ['apple', 'banana', 'orange']

// unshift() - add to beginning
fruits.unshift('mango');
console.log(fruits);  // ['mango', 'apple', 'banana', 'orange']

// Direct assignment
fruits[fruits.length] = 'grape';
console.log(fruits);  // ['mango', 'apple', 'banana', 'orange', 'grape']
```

### Removing Elements

```javascript
let fruits = ['apple', 'banana', 'orange', 'mango'];

// pop() - remove from end
let last = fruits.pop();
console.log(last);    // 'mango'
console.log(fruits);  // ['apple', 'banana', 'orange']

// shift() - remove from beginning
let first = fruits.shift();
console.log(first);   // 'apple'
console.log(fruits);  // ['banana', 'orange']

// splice() - remove from middle
fruits.splice(1, 1);  // Remove 1 element at index 1
console.log(fruits);  // ['banana']
```

## Array Methods

### Transformation Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// map() - transform each element
let doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter() - select elements
let evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce() - reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
// 15
```

### Searching Methods

```javascript
let fruits = ['apple', 'banana', 'orange', 'banana'];

// indexOf() - find first index
console.log(fruits.indexOf('banana'));     // 1
console.log(fruits.indexOf('grape'));      // -1

// lastIndexOf() - find last index
console.log(fruits.lastIndexOf('banana')); // 3

// includes() - check existence
console.log(fruits.includes('apple'));     // true
console.log(fruits.includes('grape'));     // false

// find() - find first matching element
let numbers = [1, 5, 10, 15, 20];
let found = numbers.find(num => num > 10);
console.log(found);  // 15

// findIndex() - find index of first match
let index = numbers.findIndex(num => num > 10);
console.log(index);  // 3
```

### Sorting and Reversing

```javascript
let numbers = [3, 1, 4, 1, 5, 9];

// sort() - sorts in place
numbers.sort();
console.log(numbers);  // [1, 1, 3, 4, 5, 9]

// sort with comparator
numbers.sort((a, b) => b - a);  // Descending
console.log(numbers);  // [9, 5, 4, 3, 1, 1]

// reverse() - reverses in place
numbers.reverse();
console.log(numbers);  // [1, 1, 3, 4, 5, 9]
```

### Joining and Splitting

```javascript
let fruits = ['apple', 'banana', 'orange'];

// join() - array to string
let str = fruits.join(', ');
console.log(str);  // "apple, banana, orange"

// String to array
let text = 'apple,banana,orange';
let arr = text.split(',');
console.log(arr);  // ['apple', 'banana', 'orange']
```

### Slicing and Splicing

```javascript
let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// slice() - extract portion (doesn't modify original)
let citrus = fruits.slice(2, 4);
console.log(citrus);  // ['orange', 'mango']
console.log(fruits);  // Original unchanged

// splice() - add/remove elements (modifies original)
fruits.splice(2, 1, 'kiwi', 'pear');
// Remove 1 element at index 2, add 'kiwi' and 'pear'
console.log(fruits);
// ['apple', 'banana', 'kiwi', 'pear', 'mango', 'grape']
```

### Concatenation

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// concat()
let combined = arr1.concat(arr2);
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Spread operator (modern)
let merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4, 5, 6]
```

## Iterating Arrays

### for loop
```javascript
let fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### for...of loop
```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

### forEach()
```javascript
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

## Multi-dimensional Arrays

```javascript
// 2D array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6
console.log(matrix[2][1]);  // 8

// Iterate 2D array
for (let row of matrix) {
    for (let cell of row) {
        console.log(cell);
    }
}
```

## Exercises

### Level 1
1. Create an empty array and add 5 elements to it
2. Create an array with 5 different fruits
3. Get the first, middle, and last elements of an array
4. Create an array of numbers and calculate their sum
5. Find the maximum number in an array
6. Remove duplicate elements from an array
7. Reverse an array without using reverse()
8. Check if all elements are positive numbers
9. Create an array of even numbers from 0 to 20
10. Merge two arrays

### Level 2
1. Create a function that filters out odd numbers
2. Create a function that squares all numbers in an array
3. Find the average of numbers in an array
4. Find the second largest number in an array
5. Create a function that chunks an array into groups
6. Flatten a nested array
7. Remove falsy values from an array
8. Create a function that rotates array elements
9. Find common elements between two arrays
10. Sort an array of objects by property

### Level 3
1. Implement your own map function
2. Implement your own filter function
3. Implement your own reduce function
4. Create a function for deep array cloning
5. Implement binary search on sorted array
6. Create a function to find all permutations
7. Implement array shuffling (Fisher-Yates)
8. Create a function for array difference
9. Implement custom sorting algorithms
10. Create a function for array intersection

## Summary

Today you learned:
- How to create and manipulate arrays
- Array properties and methods
- Transformation methods (map, filter, reduce)
- Searching and sorting arrays
- Iterating through arrays
- Multi-dimensional arrays

Arrays are fundamental to JavaScript programming. Practice them well!

**Tomorrow:** We'll explore loops in detail!

---

[<< Day 3](../Day03_Operators_Conditionals/README.md) | [Day 5 >>](../Day05_Loops/README.md)
