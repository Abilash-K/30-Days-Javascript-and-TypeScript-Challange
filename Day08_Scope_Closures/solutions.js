// Day 08 - Scope and Closures - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Local variable
function localExample() {
    let local = 'I am local';
    return local;
}
console.log('1. Local variable:', localExample());

// 2. var vs let vs const
console.log('\n2. Scope differences:');
if (true) {
    var varScoped = 'var leaks out';
    let letScoped = 'let is block scoped';
    const constScoped = 'const is block scoped';
}
console.log('var:', varScoped);  // Works
// console.log(letScoped);  // Would error

// 3. Simple closure counter
function simpleCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
}
const sc = simpleCounter();
console.log('\n3. Counter:', sc.increment(), sc.increment(), sc.getCount());

console.log('\n=== LEVEL 2 ===\n');

// 1. Greeting generator
function createGreeting(timeOfDay) {
    return function(name) {
        return `Good ${timeOfDay}, ${name}!`;
    };
}
const morningGreet = createGreeting('morning');
const eveningGreet = createGreeting('evening');
console.log('1. Greetings:');
console.log(morningGreet('Alice'));
console.log(eveningGreet('Bob'));

// 2. Private counter
function createCounter() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        reset() { count = 0; return count; },
        getCount() { return count; }
    };
}
const counter = createCounter();
console.log('\n2. Counter:', counter.increment(), counter.increment(), counter.decrement());

// 3. Calculator with memory
function createCalculator() {
    let memory = 0;
    return {
        add(n) { memory += n; return memory; },
        subtract(n) { memory -= n; return memory; },
        multiply(n) { memory *= n; return memory; },
        divide(n) { memory /= n; return memory; },
        clear() { memory = 0; return memory; },
        getMemory() { return memory; }
    };
}
const calc = createCalculator();
console.log('\n3. Calculator:', calc.add(10), calc.multiply(5), calc.getMemory());

console.log('\n=== LEVEL 3 ===\n');

// 1. Memoization
function memoize(fn) {
    const cache = {};
    return function(arg) {
        if (cache[arg] !== undefined) {
            console.log('From cache');
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}
const square = memoize(n => n * n);
console.log('1. Memoization:', square(5), square(5));

// 2. Module pattern todo list
const TodoList = (function() {
    let todos = [];
    let nextId = 1;
    
    return {
        add(task) {
            todos.push({ id: nextId++, task, done: false });
        },
        list() {
            return todos.map(t => `[${t.done ? 'x' : ' '}] ${t.task}`);
        },
        complete(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) todo.done = true;
        }
    };
})();

TodoList.add('Learn closures');
TodoList.add('Build project');
console.log('\n2. Todo List:', TodoList.list());
