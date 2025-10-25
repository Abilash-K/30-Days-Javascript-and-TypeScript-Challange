// Day 20 - Fetch API - Examples
console.log('=== Day 20: Fetch API Examples ===\n');

// Note: These examples demonstrate Fetch API concepts.
// To run actual API calls, execute in a browser or Node.js with fetch support.

console.log('=== 1. BASIC FETCH REQUEST ===\n');

console.log('Simple GET request:');
console.log('fetch("https://api.example.com/data")');
console.log('    .then(response => response.json())');
console.log('    .then(data => console.log(data))');
console.log('    .catch(error => console.error(error));');

console.log('\nUsing async/await:');
console.log('async function fetchData() {');
console.log('    const response = await fetch("https://api.example.com/data");');
console.log('    const data = await response.json();');
console.log('    console.log(data);');
console.log('}');

console.log('\n=== 2. RESPONSE OBJECT ===\n');

const mockResponse = {
    status: 200,
    statusText: 'OK',
    ok: true,
    headers: new Map([['content-type', 'application/json']]),
    url: 'https://api.example.com/data'
};

console.log('Response properties:');
console.log('status:', mockResponse.status);
console.log('statusText:', mockResponse.statusText);
console.log('ok:', mockResponse.ok);
console.log('url:', mockResponse.url);

console.log('\n=== 3. HTTP METHODS ===\n');

console.log('GET Request:');
console.log('fetch("https://api.example.com/users")');
console.log('    .then(r => r.json())');
console.log('    .then(users => console.log(users));');

console.log('\nPOST Request:');
console.log('fetch("https://api.example.com/users", {');
console.log('    method: "POST",');
console.log('    headers: { "Content-Type": "application/json" },');
console.log('    body: JSON.stringify({ name: "John", age: 30 })');
console.log('});');

console.log('\nPUT Request:');
console.log('fetch("https://api.example.com/users/1", {');
console.log('    method: "PUT",');
console.log('    headers: { "Content-Type": "application/json" },');
console.log('    body: JSON.stringify({ name: "Jane", age: 25 })');
console.log('});');

console.log('\nDELETE Request:');
console.log('fetch("https://api.example.com/users/1", {');
console.log('    method: "DELETE"');
console.log('});');

console.log('\n=== 4. ERROR HANDLING ===\n');

console.log('Proper error handling:');
console.log('async function safeFetch(url) {');
console.log('    try {');
console.log('        const response = await fetch(url);');
console.log('        if (!response.ok) {');
console.log('            throw new Error(`HTTP ${response.status}`);');
console.log('        }');
console.log('        return await response.json();');
console.log('    } catch (error) {');
console.log('        console.error("Fetch failed:", error);');
console.log('        return null;');
console.log('    }');
console.log('}');

console.log('\n=== 5. REQUEST OPTIONS ===\n');

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({ data: 'example' }),
    mode: 'cors',
    credentials: 'same-origin',
    cache: 'default'
};

console.log('Request options:', JSON.stringify(requestOptions, null, 2));

console.log('\n=== 6. PRACTICAL PATTERNS ===\n');

// API Client Pattern
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    async get(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    }
    
    async post(endpoint, data) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    }
}

console.log('API Client Pattern:');
console.log('const api = new APIClient("https://api.example.com");');
console.log('const users = await api.get("/users");');
console.log('const newUser = await api.post("/users", { name: "John" });');

console.log('\n=== 7. ABORT CONTROLLER ===\n');

console.log('Canceling requests with AbortController:');
console.log('const controller = new AbortController();');
console.log('');
console.log('fetch(url, { signal: controller.signal })');
console.log('    .then(r => r.json())');
console.log('    .catch(err => {');
console.log('        if (err.name === "AbortError") {');
console.log('            console.log("Request cancelled");');
console.log('        }');
console.log('    });');
console.log('');
console.log('// Cancel the request');
console.log('controller.abort();');

console.log('\n=== 8. TIMEOUT PATTERN ===\n');

console.log('Implementing request timeout:');
console.log('async function fetchWithTimeout(url, timeout = 5000) {');
console.log('    const controller = new AbortController();');
console.log('    const id = setTimeout(() => controller.abort(), timeout);');
console.log('    ');
console.log('    try {');
console.log('        const response = await fetch(url, {');
console.log('            signal: controller.signal');
console.log('        });');
console.log('        clearTimeout(id);');
console.log('        return await response.json();');
console.log('    } catch (error) {');
console.log('        if (error.name === "AbortError") {');
console.log('            throw new Error("Request timeout");');
console.log('        }');
console.log('        throw error;');
console.log('    }');
console.log('}');

console.log('\n=== 9. MULTIPLE REQUESTS ===\n');

console.log('Parallel requests with Promise.all:');
console.log('const [users, posts, comments] = await Promise.all([');
console.log('    fetch("/api/users").then(r => r.json()),');
console.log('    fetch("/api/posts").then(r => r.json()),');
console.log('    fetch("/api/comments").then(r => r.json())');
console.log(']);');

console.log('\n=== 10. CACHING PATTERN ===\n');

class CachedAPI {
    constructor() {
        this.cache = new Map();
    }
    
    async fetch(url, options = {}) {
        const cacheKey = url + JSON.stringify(options);
        
        if (this.cache.has(cacheKey)) {
            console.log('Returning from cache:', url);
            return this.cache.get(cacheKey);
        }
        
        console.log('Fetching:', url);
        const data = { mock: 'data' }; // Simulated
        this.cache.set(cacheKey, data);
        return data;
    }
}

const cachedAPI = new CachedAPI();
console.log('Caching example:');
console.log('First call - fetches data');
cachedAPI.fetch('https://api.example.com/users');
console.log('Second call - returns from cache');
cachedAPI.fetch('https://api.example.com/users');

console.log('\n=== Fetch API Examples Complete! ===');
