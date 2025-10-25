// Day 15 - JSON and Storage - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. JSON conversion
const person = { name: 'Alice', age: 28 };
const json = JSON.stringify(person);
const obj = JSON.parse(json);
console.log('1. Parsed:', obj);

// 2. Save to localStorage
localStorage.setItem('greeting', 'Hello World');
console.log('2. Saved greeting');

// 3. Save object
localStorage.setItem('person', JSON.stringify(person));
console.log('3. Saved person object');

// 4. Retrieve object
const retrieved = JSON.parse(localStorage.getItem('person'));
console.log('4. Retrieved:', retrieved);

console.log('\n=== LEVEL 2 ===\n');

// Todo list with persistence
const TodoList = {
    todos: [],
    
    load() {
        const data = localStorage.getItem('todos');
        this.todos = data ? JSON.parse(data) : [];
    },
    
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    
    add(task) {
        this.todos.push({ id: Date.now(), task, done: false });
        this.save();
    },
    
    toggle(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.done = !todo.done;
            this.save();
        }
    }
};

TodoList.load();
TodoList.add('Learn JSON');
TodoList.add('Master localStorage');
console.log('1. Todos:', TodoList.todos);

// User preferences
const Preferences = {
    get(key, defaultValue) {
        const prefs = JSON.parse(localStorage.getItem('prefs') || '{}');
        return prefs[key] !== undefined ? prefs[key] : defaultValue;
    },
    
    set(key, value) {
        const prefs = JSON.parse(localStorage.getItem('prefs') || '{}');
        prefs[key] = value;
        localStorage.setItem('prefs', JSON.stringify(prefs));
    }
};

Preferences.set('theme', 'dark');
Preferences.set('language', 'en');
console.log('\n2. Theme:', Preferences.get('theme'));

console.log('\n=== LEVEL 3 ===\n');

// Storage with expiration
const StorageWithExpiry = {
    set(key, value, expiryMs) {
        const item = {
            value: value,
            expiry: Date.now() + expiryMs
        };
        localStorage.setItem(key, JSON.stringify(item));
    },
    
    get(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
        
        const item = JSON.parse(itemStr);
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }
};

StorageWithExpiry.set('temp', 'expires soon', 5000);
console.log('1. Temp data:', StorageWithExpiry.get('temp'));
