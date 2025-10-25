# Day 03 - Booleans, Operators, and Conditionals

Welcome to Day 3! Today we'll dive deep into booleans, operators, and conditional statements - the building blocks of decision-making in programming.

## Table of Contents
- [Booleans](#booleans)
- [Truthy and Falsy Values](#truthy-and-falsy-values)
- [Comparison Operators](#comparison-operators)
- [Logical Operators](#logical-operators)
- [Arithmetic Operators](#arithmetic-operators)
- [Assignment Operators](#assignment-operators)
- [Conditional Statements](#conditional-statements)
- [Switch Statement](#switch-statement)
- [Ternary Operator](#ternary-operator)
- [Exercises](#exercises)

## Booleans

Boolean is a data type that represents one of two values: `true` or `false`.

```javascript
let isJavaScriptFun = true;
let isRaining = false;
let isLearning = true;

console.log(isJavaScriptFun);  // true
console.log(isRaining);         // false
```

Booleans are essential for:
- Conditional logic
- Validations
- Control flow
- Comparisons

## Truthy and Falsy Values

In JavaScript, values can be coerced to boolean. Some values are "truthy" (evaluate to true) and others are "falsy" (evaluate to false).

### Falsy Values
Only **six** values are falsy in JavaScript:
1. `false` - The boolean false
2. `0` - The number zero
3. `""` or `''` - Empty string
4. `null` - Absence of value
5. `undefined` - Uninitialized variable
6. `NaN` - Not a Number

```javascript
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
```

### Truthy Values
Everything else is truthy!

```javascript
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean(" "));        // true (space is a character)
console.log(Boolean([]));         // true (empty array)
console.log(Boolean({}));         // true (empty object)
```

## Comparison Operators

Comparison operators compare two values and return a boolean result.

### Equality Operators

**Loose Equality (==)** - Compares values with type coercion
```javascript
console.log(5 == 5);      // true
console.log(5 == '5');    // true (type coercion)
console.log(true == 1);   // true
console.log(false == 0);  // true
```

**Strict Equality (===)** - Compares values without type coercion (recommended)
```javascript
console.log(5 === 5);     // true
console.log(5 === '5');   // false (different types)
console.log(true === 1);  // false
console.log(false === 0); // false
```

**Best Practice:** Always use `===` and `!==` to avoid unexpected behavior.

### Inequality Operators

```javascript
console.log(5 != 5);      // false
console.log(5 != '5');    // false (loose inequality)
console.log(5 !== '5');   // true (strict inequality)
```

### Relational Operators

```javascript
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 4);      // false
```

## Logical Operators

Logical operators are used to combine or modify boolean values.

### AND Operator (&&)
Returns true if **both** operands are true.

```javascript
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// Practical example
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense);  // true - can drive
```

### OR Operator (||)
Returns true if **at least one** operand is true.

```javascript
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || false);  // false

// Practical example
let isWeekend = true;
let isHoliday = false;
console.log(isWeekend || isHoliday);  // true - day off
```

### NOT Operator (!)
Inverts the boolean value.

```javascript
console.log(!true);           // false
console.log(!false);          // true
console.log(!(5 > 3));        // false
console.log(!(5 < 3));        // true
```

### Short-Circuit Evaluation

Logical operators use short-circuit evaluation:

```javascript
// && stops at first false
false && console.log('This will not run');

// || stops at first true
true || console.log('This will not run');
```

## Arithmetic Operators

Arithmetic operators perform mathematical operations.

```javascript
let x = 10;
let y = 3;

console.log(x + y);   // 13 - Addition
console.log(x - y);   // 7  - Subtraction
console.log(x * y);   // 30 - Multiplication
console.log(x / y);   // 3.333... - Division
console.log(x % y);   // 1  - Modulus (remainder)
console.log(x ** y);  // 1000 - Exponentiation (ES2016)
```

### Increment and Decrement

```javascript
let count = 5;

// Post-increment (returns value, then increments)
console.log(count++);  // 5
console.log(count);    // 6

// Pre-increment (increments, then returns value)
console.log(++count);  // 7
console.log(count);    // 7

// Same for decrement
console.log(count--);  // 7
console.log(count);    // 6
console.log(--count);  // 5
```

## Assignment Operators

Assignment operators assign values to variables.

```javascript
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
```

## Conditional Statements

Conditional statements allow you to execute different code based on conditions.

### if Statement

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
}
```

### if...else Statement

```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}
```

### if...else if...else Statement

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

### Nested if Statements

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }
} else {
    console.log("You're too young to drive");
}
```

## Switch Statement

The switch statement is used to perform different actions based on different conditions. It's cleaner than multiple if...else statements when comparing the same variable to different values.

```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName);  // Wednesday
```

**Important:** Don't forget the `break` statement, or execution will "fall through" to the next case.

### Multiple Cases

```javascript
let fruit = 'apple';

switch (fruit) {
    case 'apple':
    case 'pear':
        console.log('This fruit is typically green or red');
        break;
    case 'banana':
    case 'mango':
        console.log('This fruit is yellow');
        break;
    default:
        console.log('Unknown fruit');
}
```

## Ternary Operator

The ternary operator is a shorthand for if...else statements.

**Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

```javascript
let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);  // Adult

// Multiple conditions (nested ternary)
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log(grade);  // B
```

**Best Practice:** Use ternary for simple conditions. For complex logic, use if...else for better readability.

## Practical Examples

### Example 1: Form Validation

```javascript
function validateForm(username, password) {
    if (!username || !password) {
        return 'Please fill all fields';
    }
    
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    
    if (password.length < 8) {
        return 'Password must be at least 8 characters';
    }
    
    return 'Form is valid!';
}

console.log(validateForm('jo', 'pass'));        // Username error
console.log(validateForm('john', 'pass'));      // Password error
console.log(validateForm('john', 'password123')); // Valid
```

### Example 2: Leap Year Checker

```javascript
function isLeapYear(year) {
    // Divisible by 4 AND (not divisible by 100 OR divisible by 400)
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false
console.log(isLeapYear(2000));  // true
console.log(isLeapYear(1900));  // false
```

### Example 3: Grade Calculator

```javascript
function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return 'Invalid score';
    }
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log(calculateGrade(95));   // A
console.log(calculateGrade(75));   // C
console.log(calculateGrade(55));   // F
```

## Key Takeaways

1. **Use strict equality (`===`)** instead of loose equality (`==`)
2. **Understand truthy/falsy** values for better conditional logic
3. **Use logical operators** to combine conditions
4. **Choose the right tool**:
   - Simple condition → ternary operator
   - Multiple conditions → if...else if...else
   - Comparing same variable → switch statement
5. **Short-circuit evaluation** can optimize your code
6. **Always validate user input** with conditionals

## Exercises

### Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variables and check their data types.
2. Check if type of '10' is equal to 10.
3. Check if parseInt('9.8') is equal to 10.
4. Write three truthy and three falsy statements.
5. Evaluate comparison expressions: 4 > 3, 4 >= 3, 4 < 3, etc.
6. Compare the length of 'python' and 'jargon'.
7. Practice logical operators with various expressions.
8. Use Date object to get year, month, date, day, hours, minutes, seconds.

### Level 2
1. Calculate area of a triangle (area = 0.5 × base × height).
2. Calculate perimeter of a triangle.
3. Calculate area and perimeter of a rectangle.
4. Calculate area and circumference of a circle.
5. Calculate slope, x-intercept, and y-intercept of y = 2x - 2.
6. Calculate slope between two points (2, 2) and (6, 10).
7. Compare slopes from questions 5 and 6.
8. Calculate y = x² + 6x + 9 for different x values.
9. Create a pay calculator (hours × rate).
10. Calculate seconds lived based on years.
11. Create human-readable time formats.

### Level 3
1. Create formatted date: YYYY-MM-DD HH:mm with two-digit padding.
2. Calculate precise seconds lived.
3. Sort three numbers in ascending order.
4. Check if a number is even or odd.
5. Check if a number is positive, negative, or zero.
6. Determine season based on month.
7. Check if a day is weekend or weekday.
8. Calculate days in a month.
9. Check if a year is a leap year.
10. Create a simple calculator (+, -, *, /).

See `exercises.js` for detailed exercises and `solutions.js` for complete solutions.

## Resources
- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [MDN: Making Decisions in Your Code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

---

**Next:** [Day 04 - Arrays](../Day04_Arrays/README.md)
