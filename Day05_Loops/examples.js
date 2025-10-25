// Day 05 - Loops - Examples

console.log('=== FOR LOOP ===\n');

// Basic for loop
console.log('--- Counting 1 to 5 ---');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Counting backwards
console.log('\n--- Counting backwards from 5 to 1 ---');
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Iterating through an array
console.log('\n--- Array Iteration ---');
const fruits = ['apple', 'banana', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// Summing numbers
console.log('\n--- Sum of 1 to 10 ---');
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log('Sum:', sum);

// Skip even numbers
console.log('\n--- Odd Numbers 1 to 10 ---');
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;  // Skip even numbers
    console.log(i);
}

// Break early
console.log('\n--- Break when finding 3 ---');
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        console.log('Found 3! Breaking...');
        break;
    }
    console.log(i);
}

// ========================================
console.log('\n=== WHILE LOOP ===\n');

// Basic while loop
console.log('--- Count to 5 ---');
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// User input simulation
console.log('\n--- Password Attempts ---');
let password = 'secret123';
let attempt = 0;
let maxAttempts = 3;
let userInput = 'wrong';  // Simulate user input

while (attempt < maxAttempts && userInput !== password) {
    attempt++;
    console.log(`Attempt ${attempt}: Incorrect password`);
    if (attempt === 2) userInput = 'secret123';  // Simulate correct input on 2nd attempt
}

if (userInput === password) {
    console.log('Access granted!');
} else {
    console.log('Maximum attempts reached. Access denied.');
}

// ========================================
console.log('\n=== DO...WHILE LOOP ===\n');

// Basic do...while (always runs at least once)
console.log('--- Run at least once ---');
let num = 1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 3);

// Even when condition is false initially
console.log('\n--- Runs once even if condition is false ---');
let x = 10;
do {
    console.log(`x is ${x}, but condition is false`);
} while (x < 5);

// ========================================
console.log('\n=== FOR...OF LOOP ===\n');

// Iterate over array values
console.log('--- Array Values ---');
const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}

// Iterate over string
console.log('\n--- String Characters ---');
const word = 'JavaScript';
for (const char of word) {
    console.log(char);
}

// With index using entries()
console.log('\n--- With Index ---');
for (const [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}

// ========================================
console.log('\n=== FOR...IN LOOP ===\n');

// Iterate over object properties
console.log('--- Object Properties ---');
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Iterate over array indices (not recommended)
console.log('\n--- Array Indices (use for...of instead) ---');
const numbers = [10, 20, 30];
for (const index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}

// ========================================
console.log('\n=== NESTED LOOPS ===\n');

// Multiplication table
console.log('--- 3x3 Multiplication Table ---');
for (let i = 1; i <= 3; i++) {
    let row = '';
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}

// Pattern printing
console.log('\n--- Triangle Pattern ---');
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// ========================================
console.log('\n=== LOOP CONTROL STATEMENTS ===\n');

// Continue - skip current iteration
console.log('--- Continue: Skip multiples of 3 ---');
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// Break - exit loop early
console.log('\n--- Break: Stop at first negative ---');
const temps = [20, 25, 30, -5, 15, 10];
for (const temp of temps) {
    if (temp < 0) {
        console.log('Found negative temperature! Stopping...');
        break;
    }
    console.log(`${temp}°C`);
}

// ========================================
console.log('\n=== PRACTICAL EXAMPLES ===\n');

// Example 1: Find factorial
console.log('--- Factorial Calculator ---');
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log('5! =', factorial(5));  // 120
console.log('7! =', factorial(7));  // 5040

// Example 2: Reverse a string
console.log('\n--- Reverse String ---');
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello'));      // olleh
console.log(reverseString('JavaScript')); // tpircSavaJ

// Example 3: Count vowels
console.log('\n--- Count Vowels ---');
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log('Vowels in "hello":', countVowels('hello'));           // 2
console.log('Vowels in "JavaScript":', countVowels('JavaScript')); // 3

// Example 4: Find prime numbers
console.log('\n--- Prime Numbers up to 20 ---');
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primes = [];
for (let i = 2; i <= 20; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}
console.log('Prime numbers:', primes.join(', '));

// Example 5: Fibonacci sequence
console.log('\n--- First 10 Fibonacci Numbers ---');
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(fibonacci(10).join(', '));

// Example 6: Sum of array elements
console.log('\n--- Sum of Array ---');
function sumArray(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}
const nums = [1, 2, 3, 4, 5];
console.log('Array:', nums);
console.log('Sum:', sumArray(nums));

// Example 7: Find maximum in array
console.log('\n--- Find Maximum ---');
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const values = [45, 23, 67, 12, 89, 34];
console.log('Array:', values);
console.log('Maximum:', findMax(values));

// Example 8: Remove duplicates
console.log('\n--- Remove Duplicates ---');
function removeDuplicates(arr) {
    const unique = [];
    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}
const withDupes = [1, 2, 2, 3, 4, 4, 5];
console.log('Original:', withDupes);
console.log('Unique:', removeDuplicates(withDupes));

// Example 9: Create multiplication table
console.log('\n--- 5 Times Table ---');
function multiplicationTable(num, limit = 10) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}
multiplicationTable(5, 5);

// Example 10: Countdown timer simulation
console.log('\n--- Countdown ---');
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log('Blast off!');
