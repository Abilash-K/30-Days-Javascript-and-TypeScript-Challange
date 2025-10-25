# Day 19 - Async/Await

Master modern async syntax with async/await!

## Async Functions

```javascript
async function fetchData() {
    return 'data';  // Automatically wrapped in Promise
}

fetchData().then(data => console.log(data));
```

## Await Keyword

```javascript
async function getData() {
    const result = await fetchData();  // Wait for promise
    console.log(result);
}
```

## Error Handling

```javascript
async function fetchUser() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Multiple Await

```javascript
// Sequential (slower)
const user = await fetchUser();
const posts = await fetchPosts();

// Parallel (faster)
const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
]);
```

## Real Example

```javascript
async function loadData() {
    try {
        const users = await fetch('/api/users').then(r => r.json());
        const posts = await fetch('/api/posts').then(r => r.json());
        
        return { users, posts };
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}
```

See `examples.js`, `exercises.js`, and `solutions.js`.

---

**Next:** [Day 20 - Fetch API](../Day20_Fetch_API/README.md)
