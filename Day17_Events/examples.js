// Day 17 - Events - Examples
console.log('=== Day 17: Event Handling Examples ===\n');

// Note: These examples demonstrate event handling concepts.
// To run interactively, you'll need an HTML file with corresponding elements.

console.log('=== 1. BASIC EVENT LISTENERS ===\n');

// Click event example (conceptual)
console.log('Example: Adding click event listener');
console.log('button.addEventListener("click", () => {');
console.log('    console.log("Button clicked!");');
console.log('});');

// Named function for reusability
console.log('\nUsing named functions:');
console.log('function handleClick(e) {');
console.log('    console.log("Clicked:", e.target);');
console.log('}');
console.log('button.addEventListener("click", handleClick);');

console.log('\n=== 2. EVENT OBJECT PROPERTIES ===\n');

// Simulating event object structure
const mockEvent = {
    type: 'click',
    target: { tagName: 'BUTTON', id: 'myBtn' },
    currentTarget: { tagName: 'DIV', className: 'container' },
    clientX: 150,
    clientY: 200,
    timeStamp: Date.now()
};

console.log('Event object properties:');
console.log('event.type:', mockEvent.type);
console.log('event.target:', mockEvent.target.tagName);
console.log('event.clientX, clientY:', mockEvent.clientX, mockEvent.clientY);
console.log('event.timeStamp:', mockEvent.timeStamp);

console.log('\n=== 3. COMMON EVENT TYPES ===\n');

const eventTypes = {
    mouse: ['click', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove'],
    keyboard: ['keydown', 'keyup', 'keypress'],
    form: ['submit', 'focus', 'blur', 'input', 'change'],
    window: ['load', 'DOMContentLoaded', 'resize', 'scroll']
};

console.log('Mouse Events:', eventTypes.mouse.join(', '));
console.log('Keyboard Events:', eventTypes.keyboard.join(', '));
console.log('Form Events:', eventTypes.form.join(', '));
console.log('Window Events:', eventTypes.window.join(', '));

console.log('\n=== 4. EVENT DELEGATION ===\n');

console.log('Event Delegation Pattern:');
console.log('// Instead of adding listener to each child');
console.log('container.addEventListener("click", (e) => {');
console.log('    if (e.target.matches(".item")) {');
console.log('        handleItem(e.target);');
console.log('    }');
console.log('});');

// Simulated delegation
function simulateDelegation() {
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
    ];
    
    console.log('\nSimulating click on Item 2:');
    const clickedItem = items.find(item => item.id === 2);
    console.log('Clicked:', clickedItem.text);
}

simulateDelegation();

console.log('\n=== 5. PREVENTING DEFAULT BEHAVIOR ===\n');

console.log('Preventing form submission:');
console.log('form.addEventListener("submit", (e) => {');
console.log('    e.preventDefault();');
console.log('    // Handle form with JavaScript');
console.log('});');

console.log('\nPreventing link navigation:');
console.log('link.addEventListener("click", (e) => {');
console.log('    e.preventDefault();');
console.log('    // Custom handling');
console.log('});');

console.log('\n=== 6. EVENT PROPAGATION ===\n');

console.log('Event Bubbling (child to parent):');
console.log('child.addEventListener("click", () => {');
console.log('    console.log("Child clicked");');
console.log('});');
console.log('parent.addEventListener("click", () => {');
console.log('    console.log("Parent clicked");');
console.log('});');
console.log('// Clicking child logs both: Child, then Parent');

console.log('\nStopping Propagation:');
console.log('child.addEventListener("click", (e) => {');
console.log('    e.stopPropagation();');
console.log('    console.log("Child clicked, parent won\'t be notified");');
console.log('});');

console.log('\n=== 7. PRACTICAL EXAMPLE: COUNTER ===\n');

// Counter simulation
class Counter {
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
        console.log('Count reset to:', this.count);
    }
}

const counter = new Counter();
console.log('Counter initialized');
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();

console.log('\n=== 8. KEYBOARD EVENT HANDLING ===\n');

console.log('Keyboard event properties:');
console.log('e.key - The key value: "a", "Enter", "Escape"');
console.log('e.code - Physical key: "KeyA", "Enter"');
console.log('e.ctrlKey - Was Ctrl pressed?');
console.log('e.shiftKey - Was Shift pressed?');
console.log('e.altKey - Was Alt pressed?');

console.log('\nExample: Keyboard shortcuts');
console.log('document.addEventListener("keydown", (e) => {');
console.log('    if ((e.ctrlKey || e.metaKey) && e.key === "s") {');
console.log('        e.preventDefault();');
console.log('        console.log("Saving...");');
console.log('    }');
console.log('});');

console.log('\n=== 9. DEBOUNCING ===\n');

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const search = debounce((term) => {
    console.log('Searching for:', term);
}, 300);

console.log('Debounce example (simulated):');
console.log('User types: "j"');
search('j');
console.log('User types: "ja"');
search('ja');
console.log('User types: "jav"');
search('jav');
console.log('(Search will only execute 300ms after last keystroke)');

console.log('\n=== 10. REMOVING EVENT LISTENERS ===\n');

console.log('Named function (can be removed):');
console.log('function handleClick() { console.log("Clicked"); }');
console.log('button.addEventListener("click", handleClick);');
console.log('button.removeEventListener("click", handleClick);');

console.log('\nAnonymous function (cannot be removed):');
console.log('button.addEventListener("click", () => {');
console.log('    console.log("Clicked");');
console.log('});');
console.log('// Cannot remove this listener!');

console.log('\n=== Event Handling Examples Complete! ===');
