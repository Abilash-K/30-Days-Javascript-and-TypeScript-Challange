// Day 09 - Higher Order Functions - Examples

const numbers = [1, 2, 3, 4, 5];

console.log('=== forEach ===');
numbers.forEach(num => console.log(num * 2));

console.log('\n=== map ===');
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

console.log('\n=== filter ===');
const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens);

console.log('\n=== reduce ===');
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

console.log('\n=== find ===');
const found = numbers.find(num => num > 3);
console.log('First > 3:', found);

console.log('\n=== some/every ===');
console.log('Some > 4:', numbers.some(num => num > 4));
console.log('Every > 0:', numbers.every(num => num > 0));

console.log('\n=== Chaining ===');
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);
console.log('Chain result:', result);
