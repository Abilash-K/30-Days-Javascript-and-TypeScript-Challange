// Day 01 - Exercise Solutions

// ========================================
// LEVEL 1
// ========================================

// 1. Write a single line comment which says, "comments can make code readable"
// comments can make code readable

// 2. Write another single comment which says, "Welcome to 30 Days of JavaScript"
// Welcome to 30 Days of JavaScript

// 3. Write a multiline comment which says, "comments can make code readable, easy to reuse and informative"
/*
comments can make code readable,
easy to reuse
and informative
*/

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
let stringVar = 'Hello World';
let booleanVar = true;
let undefinedVar = undefined;
let nullVar = null;

console.log('String:', stringVar);
console.log('Boolean:', booleanVar);
console.log('Undefined:', undefinedVar);
console.log('Null:', nullVar);

// 5. Create datatypes.js file and use the JavaScript typeof operator to check different data types
console.log('\n--- Data Types ---');
console.log('typeof stringVar:', typeof stringVar);
console.log('typeof booleanVar:', typeof booleanVar);
console.log('typeof undefinedVar:', typeof undefinedVar);
console.log('typeof nullVar:', typeof nullVar);
console.log('typeof 42:', typeof 42);
console.log('typeof 3.14:', typeof 3.14);

// 6. Declare four variables without assigning values
let var1;
let var2;
let var3;
let var4;

console.log('\n--- Unassigned Variables ---');
console.log('var1:', var1);
console.log('var2:', var2);

// 7. Declare four variables with assigned values
let name = 'Alice';
let age = 25;
let isStudent = true;
let score = 95.5;

console.log('\n--- Assigned Variables ---');
console.log('Name:', name);
console.log('Age:', age);
console.log('Is Student:', isStudent);
console.log('Score:', score);

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = 'John';
let lastName = 'Doe';
let maritalStatus = 'Single';
let country = 'USA';
let myAge = 25;

console.log('\n--- Personal Info (Multiple Lines) ---');
console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Marital Status:', maritalStatus);
console.log('Country:', country);
console.log('Age:', myAge);

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName2 = 'Jane', lastName2 = 'Smith', maritalStatus2 = 'Married', country2 = 'Canada', age2 = 30;

console.log('\n--- Personal Info (Single Line) ---');
console.log('First Name:', firstName2);
console.log('Last Name:', lastName2);
console.log('Marital Status:', maritalStatus2);
console.log('Country:', country2);
console.log('Age:', age2);

// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console
let myAge2 = 25;
let yourAge = 30;

console.log('\n--- Ages ---');
console.log('My age is', myAge2);
console.log('Your age is', yourAge);

// ========================================
// LEVEL 2
// ========================================

// 1. Using console.log() print the following statement:
console.log('\n--- Level 2 Exercise 1 ---');
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print the following quote by Mother Teresa:
console.log('\n--- Level 2 Exercise 2 ---');
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('\n--- Level 2 Exercise 3 ---');
console.log("typeof '10':", typeof '10');
console.log("typeof 10:", typeof 10);
console.log("'10' == 10:", '10' == 10);
console.log("'10' === 10:", '10' === 10);

// Make it exactly equal
let str = '10';
let num = Number(str); // or parseInt(str)
console.log('After conversion:', num === 10);
console.log('Converted value:', num, 'Type:', typeof num);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log('\n--- Level 2 Exercise 4 ---');
let floatNum = parseFloat('9.8');
console.log('parseFloat("9.8"):', floatNum);
console.log('Is it equal to 10?', floatNum === 10);

// Make it equal to 10
let roundedNum = Math.ceil(floatNum);
console.log('After Math.ceil():', roundedNum);
console.log('Is it equal to 10?', roundedNum === 10);

// 5. Check if 'on' is found in both 'python' and 'jargon'
console.log('\n--- Level 2 Exercise 5 ---');
let word1 = 'python';
let word2 = 'jargon';
let searchTerm = 'on';

console.log(`'${searchTerm}' in '${word1}':`, word1.includes(searchTerm));
console.log(`'${searchTerm}' in '${word2}':`, word2.includes(searchTerm));
console.log(`'${searchTerm}' in both:`, word1.includes(searchTerm) && word2.includes(searchTerm));

// 6. I hope this course is not full of jargon. Check if 'jargon' is in the sentence.
console.log('\n--- Level 2 Exercise 6 ---');
let sentence = 'I hope this course is not full of jargon';
console.log('Sentence:', sentence);
console.log("Contains 'jargon':", sentence.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
console.log('\n--- Level 2 Exercise 7 ---');
let random1 = Math.floor(Math.random() * 101);
console.log('Random number (0-100):', random1);

// 8. Generate a random number between 50 and 100 inclusively.
console.log('\n--- Level 2 Exercise 8 ---');
let random2 = Math.floor(Math.random() * 51) + 50;
console.log('Random number (50-100):', random2);

// 9. Generate a random number between 0 and 255 inclusively.
console.log('\n--- Level 2 Exercise 9 ---');
let random3 = Math.floor(Math.random() * 256);
console.log('Random number (0-255):', random3);

// 10. Access the 'JavaScript' string characters using a random number.
console.log('\n--- Level 2 Exercise 10 ---');
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log('String:', jsString);
console.log('Random index:', randomIndex);
console.log('Character at random index:', jsString[randomIndex]);

// ========================================
// LEVEL 3
// ========================================

// 1. Use console.log() and escape characters to print the following pattern:
console.log('\n--- Level 3 Exercise 1 ---');
console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');

// Alternative using template literals and calculations
console.log('\n--- Alternative with calculations ---');
for (let i = 1; i <= 5; i++) {
    console.log(`${i} 1 ${i} ${i ** 2} ${i ** 3}`);
}

// 2. Use substr to slice out the phrase 'because because because' from the following sentence:
console.log('\n--- Level 3 Exercise 2 ---');
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log('Original sentence:', longSentence);

// Find the position of 'because because because'
let startIndex = longSentence.indexOf('because');
let endIndex = longSentence.lastIndexOf('because') + 'because'.length;
let phrase = longSentence.substring(startIndex, endIndex);

console.log('Extracted phrase:', phrase);

// Alternative using substr (deprecated but still works)
let phrase2 = longSentence.substr(31, 23);
console.log('Using substr:', phrase2);
