// Day 18 - Promises - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Promise that resolves after 2 seconds
const delayed = new Promise(resolve => {
    setTimeout(() => resolve('2 seconds passed'), 2000);
});
delayed.then(msg => console.log('1.', msg));

// 2. Promise that rejects
const failing = new Promise((_, reject) => {
    reject(new Error('Failed'));
});
failing.catch(err => console.log('2. Caught:', err.message));

// 3. Chain promises
Promise.resolve(10)
    .then(n => n * 2)
    .then(n => n + 5)
    .then(result => console.log('3. Chain:', result));

console.log('\n=== LEVEL 2 ===\n');

// 1. Function returning promise
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(100).then(() => console.log('1. Waited 100ms'));

// 2. Promise.all
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => console.log('2. All:', results));

// 3. Promise.race
Promise.race([
    wait(100).then(() => 'fast'),
    wait(200).then(() => 'slow')
]).then(result => console.log('3. Race winner:', result));

console.log('\n=== LEVEL 3 ===\n');

// Retry logic
async function retry(fn, maxAttempts = 3) {
    for (let i = 0; i < maxAttempts; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxAttempts - 1) throw error;
            console.log(`Attempt ${i + 1} failed, retrying...`);
        }
    }
}

// Promise with timeout
function withTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), ms)
        )
    ]);
}

console.log('1. Advanced patterns ready');
