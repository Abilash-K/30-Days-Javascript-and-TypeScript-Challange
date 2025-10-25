// Day 18 - Promises - Examples

console.log('=== BASIC PROMISE ===');
const simplePromise = new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 1000);
});

simplePromise.then(result => console.log('Result:', result));

console.log('\n=== PROMISE CHAINING ===');
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 3)
    .then(result => console.log('Chain result:', result));

console.log('\n=== ERROR HANDLING ===');
Promise.reject('Error occurred')
    .catch(error => console.log('Caught:', error));

console.log('\n=== PROMISE.ALL ===');
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(results => console.log('All results:', results));

console.log('\n=== FETCH SIMULATION ===');
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: 'User ' + id });
        }, 500);
    });
}

fetchUser(1)
    .then(user => console.log('User:', user));
