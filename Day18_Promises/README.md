# Day 18 - Promises

Master asynchronous JavaScript with Promises!

## What are Promises?

A Promise represents the eventual completion (or failure) of an asynchronous operation.

```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        resolve('Success!');
        // or reject('Error!');
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

## Promise States

- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

## Creating Promises

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John' };
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## Chaining Promises

```javascript
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => processData(data))
    .then(result => displayResult(result))
    .catch(error => handleError(error));
```

## Promise Methods

```javascript
// Promise.all - Wait for all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - First to complete
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - All regardless of outcome
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));
```

See `examples.js`, `exercises.js`, and `solutions.js`.

---

**Next:** [Day 19 - Async/Await](../Day19_Async_Await/README.md)
