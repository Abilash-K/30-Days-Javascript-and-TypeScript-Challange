// Day 10 - Destructuring and Spread - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Destructure first 3
const arr = [1, 2, 3, 4, 5];
const [x, y, z] = arr;
console.log('1. First 3:', x, y, z);

// 2. First and rest
const [first, ...rest] = arr;
console.log('2. First and rest:', first, rest);

// 3. Object destructuring
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age, city } = person;
console.log('3. Person:', name, age, city);

// 4. Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log('4. Combined:', combined);

// 5. Copy array
const original = [1, 2, 3];
const copy = [...original];
console.log('5. Copy:', copy);

console.log('\n=== LEVEL 2 ===\n');

// 1. Nested destructuring
const user = {
    id: 1,
    profile: { name: 'Alice', email: 'alice@example.com' }
};
const { profile: { name: userName } } = user;
console.log('1. Nested:', userName);

// 2. Default values
const { name: n, country = 'USA' } = { name: 'Bob' };
console.log('2. With default:', n, country);

// 3. Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log('3. Swapped:', a, b);

// 4. Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const obj3 = { d: 4 };
const merged = { ...obj1, ...obj2, ...obj3 };
console.log('4. Merged:', merged);

// 5. Rest parameters
function multiply(multiplier, ...numbers) {
    return numbers.map(n => n * multiplier);
}
console.log('5. Multiply:', multiply(2, 1, 2, 3));

console.log('\n=== LEVEL 3 ===\n');

// 1. Function parameter destructuring
function greet({ name, age }) {
    return `Hello ${name}, you are ${age}`;
}
console.log('1. Greet:', greet({ name: 'John', age: 30 }));

// 2. Spread in function call
const numbers = [1, 5, 3, 9, 2];
console.log('2. Max:', Math.max(...numbers));

// 3. Pick function
function pick(obj, ...keys) {
    return keys.reduce((result, key) => {
        if (key in obj) result[key] = obj[key];
        return result;
    }, {});
}
const data = { a: 1, b: 2, c: 3, d: 4 };
console.log('3. Picked:', pick(data, 'a', 'c'));
