// Day 19 - Async/Await - Examples

console.log('=== BASIC ASYNC/AWAIT ===');

async function simple() {
    return 'Hello';
}

simple().then(result => console.log('Result:', result));

// With await
async function withAwait() {
    const result = await Promise.resolve('Awaited value');
    console.log('Awaited:', result);
}

withAwait();

console.log('\n=== ERROR HANDLING ===');

async function mightFail() {
    try {
        const result = await Promise.reject('Error!');
    } catch (error) {
        console.log('Caught:', error);
    }
}

mightFail();

console.log('\n=== PARALLEL EXECUTION ===');

async function sequential() {
    const a = await Promise.resolve(1);
    const b = await Promise.resolve(2);
    return a + b;
}

async function parallel() {
    const [a, b] = await Promise.all([
        Promise.resolve(1),
        Promise.resolve(2)
    ]);
    return a + b;
}

sequential().then(r => console.log('Sequential:', r));
parallel().then(r => console.log('Parallel:', r));
