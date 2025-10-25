# Day 13 - Error Handling

Learn to handle errors gracefully in JavaScript!

## Try-Catch

```javascript
try {
    // Code that might throw an error
    const result = riskyOperation();
} catch (error) {
    // Handle the error
    console.error('Error:', error.message);
} finally {
    // Always runs
    console.log('Cleanup');
}
```

## Throwing Errors

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (error) {
    console.log(error.message);
}
```

## Error Types

```javascript
// Error types
throw new Error('General error');
throw new TypeError('Wrong type');
throw new ReferenceError('Not defined');
throw new RangeError('Out of range');
```

## Custom Errors

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

throw new ValidationError('Invalid input');
```

See `examples.js`, `exercises.js`, and `solutions.js` for more.

---

**Next:** [Day 14 - Classes and OOP](../Day14_Classes_OOP/README.md)
