// Day 13 - Error Handling - Examples

console.log('=== TRY-CATCH ===');
try {
    const x = undefined;
    x.toLowerCase();  // Will throw error
} catch (error) {
    console.log('Caught error:', error.message);
}

console.log('\n=== THROWING ERRORS ===');
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));  // Throws error
} catch (error) {
    console.log('Error:', error.message);
}

console.log('\n=== FINALLY ===');
try {
    console.log('Try block');
    throw new Error('Test error');
} catch (error) {
    console.log('Catch block');
} finally {
    console.log('Finally always runs');
}

console.log('\n=== CUSTOM ERRORS ===');
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

try {
    throw new ValidationError('Invalid input');
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
