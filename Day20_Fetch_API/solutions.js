// Day 20 - Fetch API - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. Fetch users (conceptual - requires browser/Node with fetch)
console.log('1. Fetch all users:');
console.log('async function fetchUsers() {');
console.log('    const response = await fetch("https://jsonplaceholder.typicode.com/users");');
console.log('    const users = await response.json();');
console.log('    console.log(users);');
console.log('}');

// 2. Fetch single post
console.log('\n2. Fetch single post:');
console.log('async function fetchPost(id) {');
console.log('    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);');
console.log('    const post = await response.json();');
console.log('    return post;');
console.log('}');

// 3. POST request
console.log('\n3. Create new user:');
console.log('async function createUser(userData) {');
console.log('    const response = await fetch("https://jsonplaceholder.typicode.com/users", {');
console.log('        method: "POST",');
console.log('        headers: { "Content-Type": "application/json" },');
console.log('        body: JSON.stringify(userData)');
console.log('    });');
console.log('    return await response.json();');
console.log('}');

// 4. Error handling
console.log('\n4. Error handling:');
console.log('async function safeFetch(url) {');
console.log('    try {');
console.log('        const response = await fetch(url);');
console.log('        if (!response.ok) throw new Error(`HTTP ${response.status}`);');
console.log('        return await response.json();');
console.log('    } catch (error) {');
console.log('        console.error("Fetch error:", error);');
console.log('        return null;');
console.log('    }');
console.log('}');

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// User management system
class UserAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    async getAll() {
        const response = await fetch(`${this.baseURL}/users`);
        return response.json();
    }
    
    async getById(id) {
        const response = await fetch(`${this.baseURL}/users/${id}`);
        return response.json();
    }
    
    async create(user) {
        const response = await fetch(`${this.baseURL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    
    async update(id, user) {
        const response = await fetch(`${this.baseURL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    
    async delete(id) {
        const response = await fetch(`${this.baseURL}/users/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}

console.log('User Management System created with CRUD operations');

// Search posts
async function searchPosts(query) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase())
    );
}

console.log('Search function created');

// Parallel requests
console.log('\nParallel requests:');
console.log('const [users, posts] = await Promise.all([');
console.log('    fetch("/api/users").then(r => r.json()),');
console.log('    fetch("/api/posts").then(r => r.json())');
console.log(']);');

console.log('\n=== LEVEL 3 SOLUTIONS ===\n');

// API Client with caching
class CachedAPIClient {
    constructor(baseURL, cacheDuration = 60000) {
        this.baseURL = baseURL;
        this.cache = new Map();
        this.cacheDuration = cacheDuration;
    }
    
    async fetch(endpoint, options = {}) {
        const cacheKey = endpoint + JSON.stringify(options);
        const cached = this.cache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
            console.log('Cache hit:', endpoint);
            return cached.data;
        }
        
        console.log('Fetching:', endpoint);
        const response = await fetch(this.baseURL + endpoint, options);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        this.cache.set(cacheKey, { data, timestamp: Date.now() });
        return data;
    }
    
    clearCache() {
        this.cache.clear();
    }
}

console.log('1. Cached API Client created');

// Timeout functionality
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}

console.log('2. Timeout function created');

// Debounce for autocomplete
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

async function autocomplete(query) {
    if (query.length < 2) return [];
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    return response.json();
}

const debouncedAutocomplete = debounce(autocomplete, 300);

console.log('3. Debounced autocomplete created');

// Infinite scroll
class InfiniteScroll {
    constructor(fetchFunction) {
        this.page = 1;
        this.loading = false;
        this.hasMore = true;
        this.fetchFunction = fetchFunction;
    }
    
    async loadMore() {
        if (this.loading || !this.hasMore) return;
        
        this.loading = true;
        try {
            const items = await this.fetchFunction(this.page);
            if (items.length === 0) {
                this.hasMore = false;
            } else {
                this.page++;
            }
            return items;
        } finally {
            this.loading = false;
        }
    }
}

console.log('4. Infinite scroll system created');

// Retry with exponential backoff
async function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            if (attempt === maxRetries - 1) throw error;
            const delay = Math.pow(2, attempt) * 1000;
            console.log(`Retry ${attempt + 1} after ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

console.log('5. Retry with exponential backoff created');

console.log('\n=== All Solutions Complete! ===');
