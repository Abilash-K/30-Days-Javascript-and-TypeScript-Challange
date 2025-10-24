// Day 01 - JavaScript Introduction Examples

// ========================================
// 1. VARIABLES
// ========================================

// Using let (block-scoped, can be reassigned)
let firstName = 'John';
let lastName = 'Doe';
let age = 25;

console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Age:', age);

// Reassigning let variables
age = 26;
console.log('Updated Age:', age);

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
const COUNTRY = 'United States';
const BIRTH_YEAR = 1998;

console.log('PI:', PI);
console.log('Country:', COUNTRY);

// This would cause an error:
// PI = 3.14; // Error: Assignment to constant variable

// ========================================
// 2. DATA TYPES
// ========================================

// Numbers
let integer = 42;
let float = 3.14;
let negative = -10;

console.log('Integer:', integer, 'Type:', typeof integer);
console.log('Float:', float, 'Type:', typeof float);

// Strings
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${firstName}!`;

console.log('Single Quote:', singleQuote);
console.log('Double Quote:', doubleQuote);
console.log('Template Literal:', templateLiteral);

// Boolean
let isActive = true;
let isComplete = false;

console.log('Is Active:', isActive, 'Type:', typeof isActive);
console.log('Is Complete:', isComplete);

// Undefined
let undefinedVar;
console.log('Undefined:', undefinedVar, 'Type:', typeof undefinedVar);

// Null
let emptyValue = null;
console.log('Null:', emptyValue, 'Type:', typeof emptyValue);

// Symbol
let id = Symbol('uniqueId');
console.log('Symbol:', id, 'Type:', typeof id);

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log('BigInt:', bigNumber, 'Type:', typeof bigNumber);

// ========================================
// 3. CHECKING DATA TYPES
// ========================================

console.log('\n--- Type Checking ---');
console.log('typeof 42:', typeof 42);
console.log('typeof "Hello":', typeof "Hello");
console.log('typeof true:', typeof true);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null); // Returns "object" (historical bug)
console.log('typeof Symbol():', typeof Symbol());
console.log('typeof 123n:', typeof 123n);

// ========================================
// 4. CONSOLE METHODS
// ========================================

console.log('\n--- Console Methods ---');

// console.log()
console.log('Simple log message');
console.log('Multiple', 'values', 'in', 'one', 'log');
console.log('Number:', 42, 'String:', 'text', 'Boolean:', true);

// console.error()
console.error('This is an error message');

// console.warn()
console.warn('This is a warning message');

// console.info()
console.info('This is an informational message');

// console.table()
const users = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];
console.table(users);

// console.time() and console.timeEnd()
console.time('Loop execution');
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}
console.timeEnd('Loop execution');

// console.group() and console.groupEnd()
console.group('User Information');
console.log('Name: John Doe');
console.log('Email: john@example.com');
console.log('Age: 25');
console.groupEnd();

// ========================================
// 5. VARIABLE NAMING EXAMPLES
// ========================================

console.log('\n--- Variable Naming ---');

// Good naming conventions (camelCase)
let userName = 'johndoe';
let userAge = 25;
let isUserActive = true;
let totalPrice = 99.99;

// Constants (UPPER_SNAKE_CASE)
const MAX_SIZE = 100;
const API_KEY = 'abc123';
const DEFAULT_TIMEOUT = 5000;

console.log('User Name:', userName);
console.log('Max Size:', MAX_SIZE);

// ========================================
// 6. STRING CONCATENATION
// ========================================

console.log('\n--- String Operations ---');

let firstName2 = 'Jane';
let lastName2 = 'Smith';

// Using + operator
let fullName = firstName2 + ' ' + lastName2;
console.log('Full Name:', fullName);

// Using template literals (modern approach)
let greeting = `Hello, ${firstName2} ${lastName2}!`;
console.log(greeting);

// ========================================
// 7. ARITHMETIC OPERATIONS
// ========================================

console.log('\n--- Basic Arithmetic ---');

let num1 = 10;
let num2 = 5;

console.log('Addition:', num1 + num2);
console.log('Subtraction:', num1 - num2);
console.log('Multiplication:', num1 * num2);
console.log('Division:', num1 / num2);
console.log('Modulus:', num1 % num2);
console.log('Exponentiation:', num1 ** num2);

// ========================================
// 8. COMMENTS EXAMPLES
// ========================================

// This is a single-line comment
let x = 5; // Comment after code

/*
This is a multi-line comment
It can span multiple lines
Used for longer explanations
*/

/**
 * This is a documentation comment
 * Typically used for functions and classes
 * Helps generate documentation
 */

// ========================================
// 9. PRACTICAL EXAMPLE
// ========================================

console.log('\n--- Practical Example: User Profile ---');

const userFirstName = 'Emma';
const userLastName = 'Watson';
const userBirthYear = 1990;
const currentYear = 2024;
const userCountry = 'United Kingdom';
const isMarried = false;

const userFullName = `${userFirstName} ${userLastName}`;
const userCurrentAge = currentYear - userBirthYear;

console.log('Profile Information:');
console.log('Name:', userFullName);
console.log('Age:', userCurrentAge);
console.log('Country:', userCountry);
console.log('Marital Status:', isMarried ? 'Married' : 'Single');

// ========================================
// 10. TYPE CONVERSION PREVIEW
// ========================================

console.log('\n--- Type Conversion Preview ---');

let strNumber = '42';
let num = 42;

console.log('String "42":', strNumber, 'Type:', typeof strNumber);
console.log('Number 42:', num, 'Type:', typeof num);
console.log('Are they equal? (==):', strNumber == num);
console.log('Are they strictly equal? (===):', strNumber === num);

// Converting string to number
let converted = Number(strNumber);
console.log('Converted to number:', converted, 'Type:', typeof converted);
console.log('Strictly equal after conversion:', converted === num);
