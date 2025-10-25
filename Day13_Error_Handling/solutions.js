// Day 13 - Error Handling - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Division with error handling
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
console.log('1. Safe divide:', safeDivide(10, 0));

// 2. Validate age
function validateAge(age) {
    if (typeof age !== 'number') {
        throw new TypeError('Age must be a number');
    }
    if (age < 0 || age > 150) {
        throw new RangeError('Age must be between 0 and 150');
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    console.log('2. Age error:', error.message);
}

// 3. Finally block
function processData() {
    try {
        console.log('\n3. Processing...');
        throw new Error('Processing failed');
    } catch (error) {
        console.log('Error caught');
    } finally {
        console.log('Cleanup done');
    }
}
processData();

console.log('\n=== LEVEL 2 ===\n');

// Custom error class
class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

// Validation with custom errors
function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('name', 'Name is required');
    }
    if (!user.email || !user.email.includes('@')) {
        throw new ValidationError('email', 'Valid email required');
    }
    return true;
}

try {
    validateUser({ name: 'John' });
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`1. ${error.name} in ${error.field}: ${error.message}`);
    }
}

// Error logger
class ErrorLogger {
    static logs = [];
    
    static log(error) {
        this.logs.push({
            message: error.message,
            timestamp: new Date(),
            stack: error.stack
        });
    }
    
    static getLogs() {
        return this.logs;
    }
}

try {
    throw new Error('Test error');
} catch (error) {
    ErrorLogger.log(error);
}
console.log('\n2. Error logs:', ErrorLogger.getLogs().length);

console.log('\n=== LEVEL 3 ===\n');

// Retry logic
async function retryOperation(fn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            console.log(`Attempt ${i + 1} failed, retrying...`);
        }
    }
}

// Comprehensive error handler
function handleError(error) {
    const handlers = {
        TypeError: (err) => `Type error: ${err.message}`,
        RangeError: (err) => `Range error: ${err.message}`,
        ValidationError: (err) => `Validation error: ${err.message}`
    };
    
    const handler = handlers[error.name] || ((err) => `Error: ${err.message}`);
    return handler(error);
}

try {
    throw new TypeError('Invalid type');
} catch (error) {
    console.log('1. Handled:', handleError(error));
}
