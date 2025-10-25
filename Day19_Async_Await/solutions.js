// Day 19 - Async/Await - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Async function
async function getName() {
    return 'John';
}
getName().then(name => console.log('1. Name:', name));

// 2. Await promise
async function getValue() {
    const value = await Promise.resolve(42);
    console.log('2. Value:', value);
}
getValue();

// 3. Try-catch
async function handleError() {
    try {
        await Promise.reject('Error');
    } catch (error) {
        console.log('3. Caught:', error);
    }
}
handleError();

console.log('\n=== LEVEL 2 ===\n');

// 1. Parallel execution
async function fetchMultiple() {
    const [a, b, c] = await Promise.all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ]);
    return a + b + c;
}
fetchMultiple().then(sum => console.log('1. Sum:', sum));

// 2. Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function withDelay() {
    console.log('2. Waiting...');
    await delay(100);
    console.log('2. Done!');
}
withDelay();

console.log('\n=== LEVEL 3 ===\n');

// Async forEach
async function asyncForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}

async function processItems() {
    await asyncForEach([1, 2, 3], async (item) => {
        await delay(50);
        console.log('1. Processed:', item);
    });
}
processItems();
