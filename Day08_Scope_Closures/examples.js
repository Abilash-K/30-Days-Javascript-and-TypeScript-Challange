// Day 08 - Scope and Closures - Examples

console.log('=== SCOPE EXAMPLES ===\n');

// Global scope
let globalVar = 'I am global';

function testGlobal() {
    console.log(globalVar);  // Can access global
}
testGlobal();

// Function scope
function testFunction() {
    let localVar = 'I am local';
    console.log(localVar);
}
testFunction();
// console.log(localVar);  // Would error

// Block scope
if (true) {
    let blockVar = 'I am block scoped';
    const blockConst = 'Me too';
    console.log('\nIn block:', blockVar);
}
// console.log(blockVar);  // Would error

console.log('\n=== CLOSURES ===\n');

// Simple closure
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log('Counter:', counter());  // 1
console.log('Counter:', counter());  // 2
console.log('Counter:', counter());  // 3

// Private data with closures
function createBankAccount(initial) {
    let balance = initial;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return 'Insufficient funds';
        },
        getBalance() {
            return balance;
        }
    };
}

console.log('\n--- Bank Account ---');
const account = createBankAccount(1000);
console.log('Initial:', account.getBalance());
console.log('After deposit 500:', account.deposit(500));
console.log('After withdraw 200:', account.withdraw(200));
console.log('Final:', account.getBalance());

// Function factory
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

console.log('\n--- Function Factory ---');
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log('double(5):', double(5));
console.log('triple(5):', triple(5));
