// Day 17 - Events - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. Click event (conceptual - requires HTML button element)
console.log('1. Click event listener:');
console.log('const button = document.querySelector("#myButton");');
console.log('button.addEventListener("click", () => {');
console.log('    console.log("Button clicked!");');
console.log('});');

// 2. Input event
console.log('\n2. Input keystroke logger:');
console.log('const input = document.querySelector("#myInput");');
console.log('input.addEventListener("input", (e) => {');
console.log('    console.log("Value:", e.target.value);');
console.log('});');

// 3. Mouseover event
console.log('\n3. Mouseover effect:');
console.log('const box = document.querySelector("#box");');
console.log('box.addEventListener("mouseenter", (e) => {');
console.log('    e.target.style.backgroundColor = "lightblue";');
console.log('});');
console.log('box.addEventListener("mouseleave", (e) => {');
console.log('    e.target.style.backgroundColor = "white";');
console.log('});');

// 4. Form submit
console.log('\n4. Form submission with prevention:');
console.log('const form = document.querySelector("#myForm");');
console.log('form.addEventListener("submit", (e) => {');
console.log('    e.preventDefault();');
console.log('    const formData = new FormData(form);');
console.log('    console.log("Form data:", Object.fromEntries(formData));');
console.log('});');

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// 1. Click counter
console.log('1. Click Counter:');
class ClickCounter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
        console.log('Count:', this.count);
    }
    
    decrement() {
        this.count--;
        console.log('Count:', this.count);
    }
    
    reset() {
        this.count = 0;
        console.log('Count reset to 0');
    }
}

const counter = new ClickCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log('Final count:', counter.count);

// 2. Color picker
console.log('\n2. Color Picker Pattern:');
console.log('const colorPicker = document.querySelector("#colorPicker");');
console.log('colorPicker.addEventListener("change", (e) => {');
console.log('    document.body.style.backgroundColor = e.target.value;');
console.log('});');

// 3. Form validation
console.log('\n3. Form Validation:');
function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

function validateForm(data) {
    const errors = {};
    
    if (!data.name || data.name.length < 3) {
        errors.name = 'Name must be at least 3 characters';
    }
    
    if (!validateEmail(data.email)) {
        errors.email = 'Invalid email address';
    }
    
    return { isValid: Object.keys(errors).length === 0, errors };
}

const testData = { name: 'Jo', email: 'invalid' };
const validation = validateForm(testData);
console.log('Validation result:', validation);

// 4. Modal
console.log('\n4. Modal Pattern:');
console.log('const modal = document.querySelector("#modal");');
console.log('const openBtn = document.querySelector("#openModal");');
console.log('const closeBtn = document.querySelector("#closeModal");');
console.log('');
console.log('openBtn.addEventListener("click", () => {');
console.log('    modal.style.display = "block";');
console.log('});');
console.log('');
console.log('closeBtn.addEventListener("click", () => {');
console.log('    modal.style.display = "none";');
console.log('});');
console.log('');
console.log('document.addEventListener("keydown", (e) => {');
console.log('    if (e.key === "Escape") {');
console.log('        modal.style.display = "none";');
console.log('    }');
console.log('});');

// 5. Todo list with event delegation
console.log('\n5. Todo List with Event Delegation:');
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    add(text) {
        const todo = {
            id: this.nextId++,
            text: text,
            completed: false
        };
        this.todos.push(todo);
        console.log('Added:', text);
    }
    
    remove(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        console.log('Removed todo with id:', id);
    }
    
    toggle(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            console.log('Toggled:', todo.text, '- Completed:', todo.completed);
        }
    }
    
    list() {
        return this.todos;
    }
}

const todoList = new TodoList();
todoList.add('Learn Events');
todoList.add('Build Project');
todoList.add('Practice Daily');
todoList.toggle(1);
todoList.remove(2);
console.log('Todos:', todoList.list());

console.log('\n=== LEVEL 3 SOLUTIONS ===\n');

// 1. Keyboard shortcuts
console.log('1. Keyboard Shortcuts System:');
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
    }
    
    register(key, modifiers, callback) {
        const shortcut = {
            key: key.toLowerCase(),
            ctrl: modifiers.includes('ctrl'),
            shift: modifiers.includes('shift'),
            alt: modifiers.includes('alt')
        };
        this.shortcuts.set(this.getShortcutKey(shortcut), callback);
        console.log(`Registered: ${this.formatShortcut(shortcut)}`);
    }
    
    getShortcutKey(shortcut) {
        return `${shortcut.ctrl}-${shortcut.shift}-${shortcut.alt}-${shortcut.key}`;
    }
    
    formatShortcut(shortcut) {
        const parts = [];
        if (shortcut.ctrl) parts.push('Ctrl');
        if (shortcut.shift) parts.push('Shift');
        if (shortcut.alt) parts.push('Alt');
        parts.push(shortcut.key.toUpperCase());
        return parts.join('+');
    }
    
    handleKeyEvent(e) {
        const shortcut = {
            key: e.key.toLowerCase(),
            ctrl: e.ctrlKey,
            shift: e.shiftKey,
            alt: e.altKey
        };
        const key = this.getShortcutKey(shortcut);
        const callback = this.shortcuts.get(key);
        if (callback) {
            e.preventDefault();
            callback();
            return true;
        }
        return false;
    }
}

const shortcuts = new KeyboardShortcuts();
shortcuts.register('s', ['ctrl'], () => console.log('Save triggered'));
shortcuts.register('k', ['ctrl'], () => console.log('Command palette opened'));
shortcuts.register('p', ['ctrl', 'shift'], () => console.log('Print dialog opened'));

// 2. Debounce function
console.log('\n2. Debounce for Autocomplete:');
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function searchAPI(query) {
    console.log('Searching for:', query);
    // Simulate API call
    return ['Result 1', 'Result 2', 'Result 3'];
}

const debouncedSearch = debounce(searchAPI, 300);
console.log('Typing "j"...');
debouncedSearch('j');
console.log('Typing "ja"...');
debouncedSearch('ja');
console.log('Typing "jav"...');
debouncedSearch('jav');
console.log('(Search executes 300ms after last keystroke)');

// 3. Event delegation pattern
console.log('\n3. Event Delegation for Dynamic Lists:');
console.log('const list = document.querySelector("#dynamicList");');
console.log('list.addEventListener("click", (e) => {');
console.log('    // Handle delete button');
console.log('    if (e.target.matches(".delete-btn")) {');
console.log('        e.target.closest("li").remove();');
console.log('    }');
console.log('    ');
console.log('    // Handle edit button');
console.log('    if (e.target.matches(".edit-btn")) {');
console.log('        const li = e.target.closest("li");');
console.log('        // Edit logic');
console.log('    }');
console.log('    ');
console.log('    // Handle checkbox');
console.log('    if (e.target.matches(".checkbox")) {');
console.log('        const li = e.target.closest("li");');
console.log('        li.classList.toggle("completed");');
console.log('    }');
console.log('});');

// 4. Infinite scroll
console.log('\n4. Infinite Scroll Pattern:');
console.log('let page = 1;');
console.log('let loading = false;');
console.log('');
console.log('window.addEventListener("scroll", () => {');
console.log('    const scrollHeight = document.documentElement.scrollHeight;');
console.log('    const scrollTop = document.documentElement.scrollTop;');
console.log('    const clientHeight = document.documentElement.clientHeight;');
console.log('    ');
console.log('    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {');
console.log('        loading = true;');
console.log('        loadMoreContent()');
console.log('            .then(() => {');
console.log('                page++;');
console.log('                loading = false;');
console.log('            });');
console.log('    }');
console.log('});');

// 5. Custom context menu
console.log('\n5. Custom Context Menu:');
console.log('document.addEventListener("contextmenu", (e) => {');
console.log('    e.preventDefault();');
console.log('    ');
console.log('    const menu = document.querySelector("#customMenu");');
console.log('    menu.style.display = "block";');
console.log('    menu.style.left = e.pageX + "px";');
console.log('    menu.style.top = e.pageY + "px";');
console.log('});');
console.log('');
console.log('document.addEventListener("click", () => {');
console.log('    const menu = document.querySelector("#customMenu");');
console.log('    menu.style.display = "none";');
console.log('});');

console.log('\n=== All Solutions Complete! ===');
