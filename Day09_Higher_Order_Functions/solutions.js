// Day 09 - Higher Order Functions - Solutions

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('=== LEVEL 1 ===\n');

// 1. forEach
console.log('1. forEach:');
numbers.forEach(num => console.log(num));

// 2. map
const doubled = numbers.map(num => num * 2);
console.log('\n2. Doubled:', doubled);

// 3. filter
const evens = numbers.filter(num => num % 2 === 0);
console.log('\n3. Evens:', evens);

// 4. reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('\n4. Sum:', sum);

// 5. find
const found = numbers.find(num => num > 5);
console.log('\n5. First > 5:', found);

console.log('\n=== LEVEL 2 ===\n');

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Alice', age: 28 }
];

// 1. Extract names
const names = users.map(user => user.name);
console.log('1. Names:', names);

// 2. Filter users > 25
const older = users.filter(user => user.age > 25);
console.log('\n2. Older users:', older);

// 3. Count with reduce
const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log('\n3. Fruit count:', count);

// 4. some/every
console.log('\n4. some/every:');
console.log('Some age > 30:', users.some(u => u.age > 30));
console.log('Every age > 20:', users.every(u => u.age > 20));

// 5. Sort by age
const sorted = [...users].sort((a, b) => a.age - b.age);
console.log('\n5. Sorted by age:', sorted);

console.log('\n=== LEVEL 3 ===\n');

// 1. Chain methods
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
console.log('1. Chain result:', result);

// 2. Custom map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
console.log('\n2. Custom map:', [1, 2, 3].myMap(x => x * 2));

// 3. Custom filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
console.log('3. Custom filter:', [1, 2, 3, 4].myFilter(x => x % 2 === 0));
