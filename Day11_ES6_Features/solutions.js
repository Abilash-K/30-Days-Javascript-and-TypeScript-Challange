// Day 11 - ES6+ Features - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Template literals
const name = 'Alice';
const greeting = `Hello, ${name}! Welcome!`;
console.log('1.', greeting);

// 2. Arrow function
const square = x => x * x;
console.log('2. Square of 5:', square(5));

// 3. Default parameters
const multiply = (a, b = 1) => a * b;
console.log('3. multiply(5):', multiply(5));

// 4. Object shorthand
const age = 25;
const person = { name, age };
console.log('4. Person:', person);

// 5. Map
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log('5. Map:', [...map]);

console.log('\n=== LEVEL 2 ===\n');

// 1. for...of
const colors = ['red', 'green', 'blue'];
console.log('1. Colors:');
for (const color of colors) {
    console.log('-', color);
}

// 2. Set for unique values
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log('\n2. Unique:', unique);

// 3. Computed property names
const key = 'dynamicKey';
const obj = {
    [key]: 'value',
    [`${key}2`]: 'value2'
};
console.log('3. Computed:', obj);

console.log('\n=== LEVEL 3 ===\n');

// 1. Class
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
const calc = new Calculator();
console.log('1. Calc:', calc.add(5, 3));

// 2. Symbol
const sym = Symbol('description');
const symbolObj = {
    [sym]: 'secret value',
    public: 'public value'
};
console.log('2. Symbol value:', symbolObj[sym]);
