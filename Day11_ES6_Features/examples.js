// Day 11 - ES6+ Features - Examples

console.log('=== TEMPLATE LITERALS ===');
const name = 'John';
const age = 30;
console.log(`Hello, I'm ${name} and I'm ${age}`);

console.log('\n=== ARROW FUNCTIONS ===');
const add = (a, b) => a + b;
console.log('5 + 3 =', add(5, 3));

console.log('\n=== DEFAULT PARAMETERS ===');
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet('John'));

console.log('\n=== OBJECT LITERAL ENHANCEMENTS ===');
const city = 'NYC';
const person = { name, age, city };
console.log('Person:', person);

console.log('\n=== MAP AND SET ===');
const map = new Map();
map.set('key1', 'value1');
console.log('Map get:', map.get('key1'));

const set = new Set([1, 2, 3, 2, 1]);
console.log('Set (unique):', [...set]);
