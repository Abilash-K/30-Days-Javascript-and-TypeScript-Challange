// Day 10 - Destructuring and Spread - Examples

console.log('=== ARRAY DESTRUCTURING ===');
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log('a, b, c:', a, b, c);

const [first, , third] = arr;
console.log('first, third:', first, third);

const [head, ...tail] = arr;
console.log('head, tail:', head, tail);

console.log('\n=== OBJECT DESTRUCTURING ===');
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;
console.log('name, age:', name, age);

const { name: fullName, city: location } = person;
console.log('fullName, location:', fullName, location);

console.log('\n=== SPREAD OPERATOR ===');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Combined arrays:', combined);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log('Merged objects:', merged);

console.log('\n=== REST PARAMETERS ===');
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log('Sum:', sum(1, 2, 3, 4, 5));
