# Day 17 - Events

Master event handling in JavaScript - the foundation of interactive web applications!

## Table of Contents
- [What are Events?](#what-are-events)
- [Event Listeners](#event-listeners)
- [Common Event Types](#common-event-types)
- [Event Object](#event-object)
- [Event Propagation](#event-propagation)
- [Event Delegation](#event-delegation)
- [Preventing Default Behavior](#preventing-default-behavior)
- [Practical Examples](#practical-examples)
- [Best Practices](#best-practices)
- [Exercises](#exercises)

## What are Events?

**Events** are actions or occurrences that happen in the browser, which your JavaScript code can respond to.

Examples:
- User clicks a button
- User types in an input field
- Page finishes loading
- Mouse moves over an element
- Form is submitted

## Event Listeners

### Adding Event Listeners

The modern way to handle events is with `addEventListener()`:

```javascript
const button = document.querySelector('#myButton');

// Syntax: element.addEventListener(event, handler, options)
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Using arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Using named function (recommended for reusability)
function handleClick() {
    console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
```

### Removing Event Listeners

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);
```

**Note:** You can't remove anonymous functions!

## Common Event Types

### Mouse Events

```javascript
element.addEventListener('click', handler);       // Single click
element.addEventListener('dblclick', handler);    // Double click
element.addEventListener('mousedown', handler);   // Mouse button pressed
element.addEventListener('mouseup', handler);     // Mouse button released
element.addEventListener('mouseenter', handler);  // Mouse enters element
element.addEventListener('mouseleave', handler);  // Mouse leaves element
element.addEventListener('mousemove', handler);   // Mouse moves over element
element.addEventListener('contextmenu', handler); // Right-click
```

### Keyboard Events

```javascript
element.addEventListener('keydown', handler);     // Key pressed
element.addEventListener('keyup', handler);       // Key released
element.addEventListener('keypress', handler);    // Key pressed (deprecated)
```

### Form Events

```javascript
form.addEventListener('submit', handler);         // Form submitted
input.addEventListener('focus', handler);         // Element gains focus
input.addEventListener('blur', handler);          // Element loses focus
input.addEventListener('input', handler);         // Input value changes
input.addEventListener('change', handler);        // Input value committed
```

### Window/Document Events

```javascript
window.addEventListener('load', handler);         // Page fully loaded
window.addEventListener('DOMContentLoaded', handler); // DOM ready
window.addEventListener('resize', handler);       // Window resized
window.addEventListener('scroll', handler);       // Page scrolled
```

## Event Object

Every event handler receives an **event object** with useful information:

```javascript
button.addEventListener('click', function(event) {
    // Event type
    console.log(event.type);  // "click"
    
    // Target element (what was clicked)
    console.log(event.target);
    
    // Current element (where listener is attached)
    console.log(event.currentTarget);
    
    // Mouse position
    console.log(event.clientX, event.clientY);
    
    // Timestamp
    console.log(event.timeStamp);
});
```

### Keyboard Event Properties

```javascript
input.addEventListener('keydown', (e) => {
    console.log(e.key);        // The key value: "a", "Enter", "Escape"
    console.log(e.code);       // Physical key: "KeyA", "Enter"
    console.log(e.keyCode);    // Deprecated numeric code
    console.log(e.ctrlKey);    // Was Ctrl pressed?
    console.log(e.shiftKey);   // Was Shift pressed?
    console.log(e.altKey);     // Was Alt pressed?
});
```

## Event Propagation

Events in the DOM propagate in three phases:

1. **Capturing Phase** - Event travels from window to target
2. **Target Phase** - Event reaches the target element
3. **Bubbling Phase** - Event bubbles back up to window (default)

```javascript
// Bubbling (default) - child to parent
parent.addEventListener('click', () => {
    console.log('Parent clicked');
});

child.addEventListener('click', () => {
    console.log('Child clicked');
});
// Clicking child logs: "Child clicked", then "Parent clicked"

// Capturing - parent to child (use third parameter)
parent.addEventListener('click', () => {
    console.log('Parent clicked');
}, true);  // true = capturing phase
```

### Stopping Propagation

```javascript
child.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevents bubbling to parent
    console.log('Child clicked');
});
// Now parent handler won't be called
```

## Event Delegation

**Event delegation** is adding a listener to a parent element to handle events on its children.

Benefits:
- Better performance (one listener vs many)
- Works with dynamically added elements
- Less memory usage

```javascript
// ❌ Bad - Multiple listeners
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

// ✅ Good - Single listener with delegation
const container = document.querySelector('.button-container');
container.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        handleClick(e);
    }
});
```

### Practical Delegation Example

```javascript
// Handle clicks on a dynamic list
const list = document.querySelector('#todoList');

list.addEventListener('click', (e) => {
    // Check if a delete button was clicked
    if (e.target.matches('.delete-btn')) {
        const li = e.target.closest('li');
        li.remove();
    }
    
    // Check if a checkbox was clicked
    if (e.target.matches('.todo-checkbox')) {
        const li = e.target.closest('li');
        li.classList.toggle('completed');
    }
});
```

## Preventing Default Behavior

Many elements have default behaviors that you might want to prevent:

```javascript
// Prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form with JavaScript instead
    console.log('Form submitted');
});

// Prevent link navigation
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link clicked but not navigating');
});

// Prevent context menu (right-click menu)
element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // Show custom context menu
});
```

## Practical Examples

### Example 1: Button Click Counter

```javascript
const button = document.querySelector('#counterBtn');
const display = document.querySelector('#count');
let count = 0;

button.addEventListener('click', () => {
    count++;
    display.textContent = count;
});
```

### Example 2: Form Validation

```javascript
const form = document.querySelector('#myForm');
const input = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = input.value.trim();
    
    if (!email.includes('@')) {
        error.textContent = 'Please enter a valid email';
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        console.log('Form is valid!');
        // Submit form data
    }
});
```

### Example 3: Keyboard Shortcuts

```javascript
document.addEventListener('keydown', (e) => {
    // Ctrl+S or Cmd+S to save
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        console.log('Saving...');
        // Save logic here
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});
```

### Example 4: Dynamic List with Delegation

```javascript
const list = document.querySelector('#itemList');
const addBtn = document.querySelector('#addItem');
let itemCount = 0;

// Add new item
addBtn.addEventListener('click', () => {
    itemCount++;
    const li = document.createElement('li');
    li.innerHTML = `
        Item ${itemCount}
        <button class="delete-btn">Delete</button>
    `;
    list.appendChild(li);
});

// Delete items using delegation
list.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        e.target.parentElement.remove();
    }
});
```

### Example 5: Mouse Tracking

```javascript
const box = document.querySelector('#trackBox');
const coords = document.querySelector('#coordinates');

box.addEventListener('mousemove', (e) => {
    const x = e.clientX - box.offsetLeft;
    const y = e.clientY - box.offsetTop;
    coords.textContent = `X: ${x}, Y: ${y}`;
});
```

## Best Practices

### 1. Use Event Delegation for Dynamic Content

```javascript
// ✅ Good - Works for current and future elements
container.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handleItem(e.target);
    }
});

// ❌ Bad - Only works for existing elements
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', handleItem);
});
```

### 2. Remove Unused Event Listeners

```javascript
function cleanup() {
    element.removeEventListener('click', handler);
}
```

### 3. Use Named Functions for Reusability

```javascript
// ✅ Good
function handleClick(e) {
    console.log('Clicked');
}
button.addEventListener('click', handleClick);

// ❌ Bad - Can't remove or reuse
button.addEventListener('click', function() {
    console.log('Clicked');
});
```

### 4. Debounce/Throttle Expensive Operations

```javascript
// Debounce: Wait until user stops typing
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

input.addEventListener('input', debounce((e) => {
    console.log('Search:', e.target.value);
}, 300));
```

### 5. Prevent Memory Leaks

```javascript
// Clean up when removing elements
function removeElement(element) {
    element.removeEventListener('click', handler);
    element.remove();
}
```

## Key Takeaways

1. Use `addEventListener()` for modern event handling
2. Event object provides useful information (`event.target`, `event.type`, etc.)
3. Events bubble up by default (use `stopPropagation()` to prevent)
4. Event delegation is efficient for dynamic content
5. Use `preventDefault()` to stop default browser behavior
6. Remove unused listeners to prevent memory leaks
7. Debounce/throttle for performance-sensitive events

## Exercises

See `exercises.js` for practice problems and `solutions.js` for complete solutions.

### Level 1
1. Add a click event to a button that shows an alert
2. Change the text of an element when clicked
3. Add a hover effect using mouse events
4. Track keyboard input in an input field

### Level 2
1. Build a color picker that changes page background
2. Create a click counter with increment/decrement buttons
3. Implement form validation with real-time feedback
4. Build a simple modal that opens and closes

### Level 3
1. Create a drag-and-drop interface
2. Build a keyboard shortcut system
3. Implement infinite scroll pagination
4. Create an autocomplete search box

## Resources

- [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/events)

---

**Next:** [Day 18 - Promises](../Day18_Promises/README.md)
