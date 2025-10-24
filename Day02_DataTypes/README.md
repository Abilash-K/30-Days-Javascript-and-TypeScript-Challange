# Day 02 - Data Types in Depth

Welcome to Day 2! Today we'll dive deep into JavaScript data types and learn everything about strings, numbers, and type conversion.

## Table of Contents
- [Primitive vs Reference Types](#primitive-vs-reference-types)
- [Numbers in Detail](#numbers-in-detail)
- [Strings in Detail](#strings-in-detail)
- [Template Literals](#template-literals)
- [String Methods](#string-methods)
- [Type Conversion](#type-conversion)
- [Number Methods](#number-methods)
- [Math Object](#math-object)
- [Exercises](#exercises)

## Primitive vs Reference Types

JavaScript has two categories of data types:

### Primitive Types (Immutable)
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

**Characteristics:**
- Stored directly in the variable
- Cannot be changed (immutable)
- Compared by value

```javascript
let x = 10;
let y = x;  // Copy the value
y = 20;     // Changing y doesn't affect x

console.log(x); // 10
console.log(y); // 20
```

### Reference Types (Mutable)
- Objects
- Arrays
- Functions

**Characteristics:**
- Stored by reference
- Can be changed (mutable)
- Compared by reference

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Copy the reference
arr2.push(4);     // Changing arr2 also changes arr1

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

## Numbers in Detail

JavaScript has only one number type: **Number** (64-bit floating point).

### Creating Numbers

```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let exponential = 2.5e6;  // 2500000
let binary = 0b1010;      // 10 in decimal
let octal = 0o12;         // 10 in decimal
let hex = 0xFF;           // 255 in decimal
```

### Special Number Values

```javascript
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log('abc' / 2);    // NaN
console.log(0 / 0);        // NaN
```

### Checking Number Types

```javascript
console.log(isNaN(NaN));           // true
console.log(isNaN('hello'));       // true
console.log(isNaN(123));           // false

console.log(isFinite(100));        // true
console.log(isFinite(Infinity));   // false
console.log(isFinite(NaN));        // false

console.log(Number.isInteger(42));     // true
console.log(Number.isInteger(42.5));   // false
```

### Number Precision

```javascript
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false

// Solution: Round to specific decimal places
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log(Math.round((0.1 + 0.2) * 10) / 10); // 0.3
```

## Strings in Detail

Strings are sequences of characters used to represent text.

### Creating Strings

```javascript
let single = 'Hello';
let double = "World";
let backtick = `Hello World`;

// Multiline strings (before template literals)
let multiline1 = 'Line 1\n' +
                 'Line 2\n' +
                 'Line 3';

// Multiline with template literals
let multiline2 = `Line 1
Line 2
Line 3`;
```

### String Concatenation

```javascript
let firstName = 'John';
let lastName = 'Doe';

// Using + operator
let fullName1 = firstName + ' ' + lastName;

// Using concat method
let fullName2 = firstName.concat(' ', lastName);

// Using template literals (best)
let fullName3 = `${firstName} ${lastName}`;

console.log(fullName1); // "John Doe"
```

### Escape Characters

```javascript
let quote = 'It\'s a beautiful day';
let path = 'C:\\Users\\Documents';
let newline = 'First line\nSecond line';
let tab = 'Name:\tJohn';
let backslash = 'This is a backslash: \\';

console.log(quote);      // It's a beautiful day
console.log(newline);    // First line
                         // Second line
console.log(tab);        // Name:	John
```

## Template Literals

Template literals (backticks) provide powerful string features.

### Expression Interpolation

```javascript
let a = 5;
let b = 10;
console.log(`Sum: ${a + b}`);              // "Sum: 15"
console.log(`Product: ${a * b}`);          // "Product: 50"

let name = 'Alice';
console.log(`Hello, ${name.toUpperCase()}!`); // "Hello, ALICE!"
```

### Multiline Strings

```javascript
let html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`;
```

### Tagged Templates (Advanced)

```javascript
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}<strong>${values[i] || ''}</strong>`;
    }, '');
}

let name = 'John';
let age = 30;
let message = highlight`Name: ${name}, Age: ${age}`;
console.log(message); // "Name: <strong>John</strong>, Age: <strong>30</strong>"
```

## String Methods

### Accessing Characters

```javascript
let str = 'Hello';

// Bracket notation
console.log(str[0]);      // 'H'
console.log(str[4]);      // 'o'

// charAt method
console.log(str.charAt(0)); // 'H'

// charCodeAt (get character code)
console.log(str.charCodeAt(0)); // 72
```

### Length Property

```javascript
let text = 'JavaScript';
console.log(text.length);  // 10
```

### Case Conversion

```javascript
let str = 'Hello World';

console.log(str.toLowerCase());  // "hello world"
console.log(str.toUpperCase());  // "HELLO WORLD"
```

### Searching

```javascript
let text = 'JavaScript is awesome';

console.log(text.indexOf('is'));        // 11
console.log(text.indexOf('Python'));    // -1
console.log(text.lastIndexOf('a'));     // 17

console.log(text.includes('awesome'));  // true
console.log(text.startsWith('Java'));   // true
console.log(text.endsWith('some'));     // true
```

### Extracting Parts

```javascript
let str = 'JavaScript';

// substring(start, end)
console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4));      // "Script"

// substr(start, length) - deprecated
console.log(str.substr(0, 4));      // "Java"

// slice(start, end) - supports negative indices
console.log(str.slice(0, 4));       // "Java"
console.log(str.slice(-6));         // "Script"
console.log(str.slice(-6, -2));     // "Scri"
```

### Replacing

```javascript
let text = 'Hello World';

console.log(text.replace('World', 'JavaScript')); // "Hello JavaScript"
console.log(text.replaceAll('l', 'L'));          // "HeLLo WorLd"

// Using regex
console.log(text.replace(/o/g, '0')); // "Hell0 W0rld"
```

### Trimming

```javascript
let str = '   Hello World   ';

console.log(str.trim());       // "Hello World"
console.log(str.trimStart());  // "Hello World   "
console.log(str.trimEnd());    // "   Hello World"
```

### Splitting

```javascript
let csv = 'apple,banana,orange';
console.log(csv.split(','));  // ["apple", "banana", "orange"]

let sentence = 'Hello World';
console.log(sentence.split(' '));  // ["Hello", "World"]
console.log(sentence.split(''));   // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```

### Repeating and Padding

```javascript
console.log('Ha'.repeat(3));         // "HaHaHa"
console.log('5'.padStart(3, '0'));   // "005"
console.log('5'.padEnd(3, '0'));     // "500"
```

## Type Conversion

### Converting to String

```javascript
let num = 42;

// String() function
console.log(String(num));        // "42"

// toString() method
console.log(num.toString());     // "42"

// Template literal
console.log(`${num}`);           // "42"

// Concatenation with string
console.log(num + '');           // "42"
```

### Converting to Number

```javascript
let str = '42';

// Number() function
console.log(Number(str));        // 42
console.log(Number('3.14'));     // 3.14
console.log(Number('42px'));     // NaN

// parseInt() - for integers
console.log(parseInt('42'));     // 42
console.log(parseInt('42.99'));  // 42
console.log(parseInt('42px'));   // 42

// parseFloat() - for floats
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('3.14.15')); // 3.14

// Unary plus operator
console.log(+'42');              // 42
console.log(+'3.14');            // 3.14
```

### Converting to Boolean

```javascript
// Boolean() function
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean('hello'));   // true
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// Double NOT operator
console.log(!!'hello');          // true
console.log(!!'');               // false
```

### Falsy Values

```javascript
// These values convert to false
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false

// Everything else is truthy
console.log(Boolean(1));         // true
console.log(Boolean('0'));       // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

## Number Methods

```javascript
let num = 123.456789;

// toFixed(digits) - fixed decimal places
console.log(num.toFixed(2));        // "123.46"

// toPrecision(digits) - significant digits
console.log(num.toPrecision(4));    // "123.5"

// toExponential(digits) - exponential notation
console.log(num.toExponential(2));  // "1.23e+2"

// toString(base) - convert to string with base
console.log((255).toString(16));    // "ff" (hexadecimal)
console.log((10).toString(2));      // "1010" (binary)
```

## Math Object

The Math object provides mathematical operations.

### Common Properties

```javascript
console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045
```

### Rounding Methods

```javascript
console.log(Math.round(4.7));   // 5
console.log(Math.round(4.4));   // 4
console.log(Math.ceil(4.1));    // 5 (round up)
console.log(Math.floor(4.9));   // 4 (round down)
console.log(Math.trunc(4.9));   // 4 (remove decimals)
```

### Min and Max

```javascript
console.log(Math.min(1, 5, 3));      // 1
console.log(Math.max(1, 5, 3));      // 5
console.log(Math.min(...[1, 5, 3])); // 1 (with spread)
```

### Power and Square Root

```javascript
console.log(Math.pow(2, 3));    // 8
console.log(2 ** 3);            // 8 (exponentiation operator)
console.log(Math.sqrt(16));     // 4
console.log(Math.cbrt(27));     // 3 (cube root)
```

### Random Numbers

```javascript
// Random between 0 and 1
console.log(Math.random());

// Random integer between 0 and 10
console.log(Math.floor(Math.random() * 11));

// Random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 100));
```

### Other Methods

```javascript
console.log(Math.abs(-5));      // 5
console.log(Math.sign(-5));     // -1
console.log(Math.sign(5));      // 1
console.log(Math.sign(0));      // 0
```

## Exercises

### Level 1

1. Declare variables of different data types and check their types using `typeof`
2. Create a string and check its length
3. Convert the string "9.8" to number and check if it's equal to 10
4. Check if "Python" and "jargon" both contain "on"
5. Generate a random number between 0 and 100
6. Concatenate your first name and last name using different methods
7. Use template literals to create a greeting message
8. Check if "10" is exactly equal to 10 and if not, convert it
9. Create a multiline string using template literals
10. Round 3.14159 to 2 decimal places

### Level 2

1. Write a script that generates a random hex color code (e.g., #FF5733)
2. Write a script that generates a random RGB color (e.g., rgb(255, 87, 51))
3. Extract "because because because" from the sentence:
   "You cannot end a sentence with because because because is a conjunction"
4. Check if a string contains the word "Script" (case-insensitive)
5. Create a function that converts Celsius to Fahrenheit
6. Create a function that converts Fahrenheit to Celsius
7. Create a BMI calculator (BMI = weight(kg) / (height(m))^2)
8. Write a script that prompts for base and height and calculates triangle area
9. Write a script that calculates the slope of a line y = 2x - 2
10. Compare the slope of the two linear equations

### Level 3

1. Create a function that validates email format
2. Create a function that validates phone number format
3. Create a function that capitalizes each word in a sentence
4. Create a function that reverses a string
5. Create a function that checks if a string is a palindrome
6. Create a function that counts vowels in a string
7. Create a function that removes all spaces from a string
8. Create a function that truncates a string to a specified length
9. Create a function that converts snake_case to camelCase
10. Create a function that converts camelCase to snake_case

## Summary

Today you learned:
- The difference between primitive and reference types
- Numbers in depth including special values and precision
- String creation and manipulation methods
- Template literals and their power
- Type conversion between different types
- The Math object and its methods
- How to work with random numbers

**Tomorrow:** We'll explore booleans, operators, and conditional statements!

## Additional Resources

- [MDN Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

**Congratulations!** 🎉 You've completed Day 2!

[<< Day 1](../Day01_Introduction/README.md) | [Day 3 >>](../Day03_Operators_Conditionals/README.md)
