# Day 08 - Scope and Closures

Welcome to Day 8! Today we'll explore scope and closures - fundamental concepts that determine variable accessibility and enable powerful programming patterns.

## Table of Contents
- [What is Scope?](#what-is-scope)
- [Global Scope](#global-scope)
- [Local/Function Scope](#localfunction-scope)
- [Block Scope](#block-scope)
- [Lexical Scope](#lexical-scope)
- [Closures](#closures)
- [Practical Applications](#practical-applications)
- [Common Pitfalls](#common-pitfalls)
- [Exercises](#exercises)

## What is Scope?

**Scope** determines the accessibility of variables, functions, and objects in your code.

### Types of Scope:
1. **Global Scope** - Accessible everywhere
2. **Function Scope** - Accessible within function
3. **Block Scope** - Accessible within block `{}`

## Global Scope

Variables declared outside any function or block have global scope.

```javascript
let globalVar = 'I am global';
const PI = 3.14159;

function showGlobal() {
    console.log(globalVar);  // Accessible
}
console.log(globalVar);  // Accessible
```

## Local/Function Scope

Variables declared inside a function are only accessible within that function.

```javascript
function myFunction() {
    let localVar = 'I am local';
    console.log(localVar);  // Works
}
// console.log(localVar);  // ❌ ReferenceError
```

## Block Scope

Variables declared with `let` and `const` inside `{}` are block-scoped.

```javascript
if (true) {
    let blockVar = 'Block scoped';
    console.log(blockVar);  // ✅ Works
}
// console.log(blockVar);  // ❌ ReferenceError
```

**Best Practice:** Always use `let` and `const`, avoid `var`.

## Closures

A **closure** is a function that has access to variables from its outer scope, even after the outer function has finished executing.

```javascript
function makeCounter() {
    let count = 0;  // Private variable
    
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
```

### Why Closures Matter
1. **Data Privacy** - Create private variables
2. **Function Factories** - Generate custom functions
3. **State Preservation** - Remember values

## Practical Applications

### Private Variables
```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private!
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}
```

### Function Factories
```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5));  // 10
```

## Key Takeaways

1. **Scope** determines variable accessibility
2. Use `let`/`const` for block scope, avoid `var`
3. **Closures** remember outer scope
4. Closures enable data privacy and function factories

## Exercises

See `exercises.js` and `solutions.js` for practice problems.

## Resources
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

**Next:** [Day 09 - Higher Order Functions](../Day09_Higher_Order_Functions/README.md)
