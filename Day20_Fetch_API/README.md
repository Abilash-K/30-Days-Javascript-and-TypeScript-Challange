# Day 20 - Fetch API

Master the Fetch API - the modern way to make HTTP requests in JavaScript!

## Table of Contents
- [What is the Fetch API?](#what-is-the-fetch-api)
- [Basic Fetch Request](#basic-fetch-request)
- [Response Object](#response-object)
- [Request Methods](#request-methods)
- [Working with JSON](#working-with-json)
- [Error Handling](#error-handling)
- [Request Options](#request-options)
- [Practical Examples](#practical-examples)
- [Best Practices](#best-practices)

## What is the Fetch API?

The **Fetch API** provides a modern interface for making HTTP requests. It returns Promises, making it easier to work with than the older XMLHttpRequest.

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

## Basic Fetch Request

### GET Request

```javascript
// Simple GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Using async/await (preferred)
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Response Object

The `fetch()` promise resolves to a Response object:

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        console.log(response.status);      // 200
        console.log(response.statusText);  // "OK"
        console.log(response.ok);          // true if status 200-299
        console.log(response.headers);     // Headers object
        console.log(response.url);         // Final URL (after redirects)
        
        return response.json();  // Parse JSON
    });
```

### Response Methods

```javascript
response.json()       // Parse as JSON
response.text()       // Parse as text
response.blob()       // Parse as binary data
response.formData()   // Parse as FormData
response.arrayBuffer() // Parse as ArrayBuffer
```

## Request Methods

### GET

```javascript
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(users => console.log(users));
```

### POST

```javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
    })
})
.then(response => response.json())
.then(data => console.log('Created:', data));
```

### PUT (Update)

```javascript
fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Jane Doe',
        email: 'jane@example.com'
    })
})
.then(response => response.json())
.then(data => console.log('Updated:', data));
```

### DELETE

```javascript
fetch('https://api.example.com/users/1', {
    method: 'DELETE'
})
.then(response => {
    if (response.ok) {
        console.log('Deleted successfully');
    }
});
```

## Working with JSON

```javascript
// Sending JSON
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log(data));

// Receiving JSON
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        });
    });
```

## Error Handling

### Checking Response Status

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### Using Async/Await with Try-Catch

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

## Request Options

```javascript
fetch('https://api.example.com/data', {
    method: 'POST',              // GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify(data),  // Request body
    mode: 'cors',                // no-cors, cors, same-origin
    credentials: 'same-origin',  // include, same-origin, omit
    cache: 'default',            // default, no-store, reload, etc.
    redirect: 'follow',          // manual, follow, error
    referrer: 'client'           // no-referrer, client
});
```

## Practical Examples

### Example 1: Fetch User List

```javascript
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

getUsers().then(users => {
    users.forEach(user => console.log(user.name));
});
```

### Example 2: Create Resource

```javascript
async function createPost(title, body) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 1
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        
        const post = await response.json();
        console.log('Created post:', post);
        return post;
    } catch (error) {
        console.error('Error:', error);
    }
}

createPost('My Title', 'This is the content');
```

### Example 3: Multiple Requests

```javascript
async function fetchMultiple() {
    try {
        const [users, posts] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
        ]);
        
        console.log('Users:', users.length);
        console.log('Posts:', posts.length);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Example 4: Timeout

```javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out');
        } else {
            console.error('Fetch error:', error);
        }
    }
}
```

## Best Practices

### 1. Always Check Response Status

```javascript
const response = await fetch(url);
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
```

### 2. Use Async/Await

```javascript
// ✅ Good - Clean and readable
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// ❌ Harder to read
function getData() {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
```

### 3. Handle Errors Properly

```javascript
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
} catch (error) {
    console.error('Error:', error);
    // Show user-friendly error message
}
```

### 4. Set Appropriate Headers

```javascript
fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})
```

### 5. Use AbortController for Cancellation

```javascript
const controller = new AbortController();

fetch(url, { signal: controller.signal })
    .then(response => response.json());

// Cancel request
controller.abort();
```

## Key Takeaways

1. Fetch returns Promises - use `.then()` or `async/await`
2. Always check `response.ok` before parsing
3. Use `response.json()` for JSON data
4. Set appropriate headers for POST/PUT requests
5. Handle errors with try-catch or `.catch()`
6. AbortController for request cancellation
7. Fetch only rejects on network failure, not HTTP errors

## Exercises

See `exercises.js` and `solutions.js` for practice.

### Level 1
1. Fetch data from an API and log it
2. Send a POST request with JSON data
3. Handle fetch errors properly
4. Fetch and display user information

### Level 2
1. Build a user management system (CRUD operations)
2. Implement search functionality with API
3. Create a data table from API response
4. Handle loading states and errors

### Level 3
1. Build infinite scroll with pagination
2. Implement request caching
3. Create an autocomplete search
4. Build a real-time data dashboard

## Resources

- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Free fake API for testing

---

**Next:** [Day 21 - TypeScript Introduction](../Day21_TypeScript_Intro/README.md)
