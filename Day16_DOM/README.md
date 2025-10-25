# Day 16 - DOM Manipulation

Master the Document Object Model (DOM) - the key to creating dynamic, interactive web pages!

## Table of Contents
- [What is the DOM?](#what-is-the-dom)
- [Selecting Elements](#selecting-elements)
- [Creating and Modifying Elements](#creating-and-modifying-elements)
- [Attributes and Properties](#attributes-and-properties)
- [CSS Manipulation](#css-manipulation)
- [Traversing the DOM](#traversing-the-dom)
- [Practical Examples](#practical-examples)
- [Best Practices](#best-practices)
- [Exercises](#exercises)

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface that represents your HTML document as a tree of objects that JavaScript can interact with.

```
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── div
          │   └── p
          └── script
```

## Selecting Elements

### querySelector and querySelectorAll

**Modern and recommended approach:**

```javascript
// Select single element (returns first match)
const header = document.querySelector('.header');
const title = document.querySelector('#title');
const firstPara = document.querySelector('p');

// Select multiple elements (returns NodeList)
const allParagraphs = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');

// Use CSS selectors
const navLinks = document.querySelectorAll('nav > ul > li');
```

### Classic Methods

```javascript
// By ID
const element = document.getElementById('myId');

// By class name
const items = document.getElementsByClassName('item');

// By tag name
const paragraphs = document.getElementsByTagName('p');
```

**Best Practice:** Use `querySelector()` and `querySelectorAll()` for flexibility.

## Creating and Modifying Elements

### Creating Elements

```javascript
// Create new element
const div = document.createElement('div');
const paragraph = document.createElement('p');
const button = document.createElement('button');

// Set content
paragraph.textContent = 'Hello World!';
paragraph.innerHTML = '<strong>Hello</strong> World!';

// Append to DOM
document.body.appendChild(paragraph);
```

### Modifying Content

```javascript
const element = document.querySelector('.content');

// Text content (safe, escapes HTML)
element.textContent = 'New text';

// HTML content (can parse HTML)
element.innerHTML = '<span>New HTML</span>';

// Inner text (respects CSS visibility)
element.innerText = 'Visible text';
```

### Adding and Removing Elements

```javascript
// Append at the end
parent.appendChild(child);

// Insert before
parent.insertBefore(newElement, referenceElement);

// Modern methods
parent.append(child1, child2, 'text');  // Can add multiple
parent.prepend(child);  // Add at beginning
element.before(newElement);  // Insert before element
element.after(newElement);   // Insert after element

// Remove elements
element.remove();  // Remove element
parent.removeChild(child);  // Remove specific child
```

## Attributes and Properties

### Working with Attributes

```javascript
const link = document.querySelector('a');

// Get attribute
const href = link.getAttribute('href');

// Set attribute
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// Remove attribute
link.removeAttribute('target');

// Check if has attribute
if (link.hasAttribute('href')) {
    console.log('Has href');
}

// Direct property access (preferred for common attributes)
link.href = 'https://example.com';
link.id = 'myLink';
link.className = 'active';
```

### Data Attributes

```javascript
// HTML: <div data-user-id="123" data-role="admin"></div>
const div = document.querySelector('div');

// Access data attributes
const userId = div.dataset.userId;  // "123"
const role = div.dataset.role;      // "admin"

// Set data attributes
div.dataset.status = 'active';
```

## CSS Manipulation

### Inline Styles

```javascript
const element = document.querySelector('.box');

// Set individual style
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Set multiple styles
Object.assign(element.style, {
    color: 'blue',
    backgroundColor: 'yellow',
    padding: '10px'
});
```

### CSS Classes

```javascript
const element = document.querySelector('.item');

// Add class
element.classList.add('active');
element.classList.add('highlight', 'selected');

// Remove class
element.classList.remove('active');

// Toggle class
element.classList.toggle('hidden');

// Check if has class
if (element.classList.contains('active')) {
    console.log('Element is active');
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

## Traversing the DOM

### Parent, Child, Sibling Navigation

```javascript
const element = document.querySelector('.child');

// Parent
const parent = element.parentElement;
const parentNode = element.parentNode;

// Children
const children = parent.children;  // HTMLCollection
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const childCount = parent.childElementCount;

// Siblings
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Find closest ancestor matching selector
const container = element.closest('.container');
```

## Practical Examples

### Example 1: Dynamic List

```javascript
// Create a dynamic todo list
const todoList = document.querySelector('#todoList');
const todos = ['Learn JavaScript', 'Build project', 'Practice daily'];

todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.classList.add('todo-item');
    todoList.appendChild(li);
});
```

### Example 2: Card Generator

```javascript
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    
    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    
    return card;
}

// Usage
const container = document.querySelector('.container');
const myCard = createCard('Hello', 'This is a card');
container.appendChild(myCard);
```

### Example 3: Toggle Visibility

```javascript
function toggleElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.toggle('hidden');
    }
}

// Usage
toggleElement('.sidebar');
```

## Best Practices

1. **Cache DOM Queries**
   ```javascript
   // ❌ Bad - queries DOM multiple times
   for (let i = 0; i < 100; i++) {
       document.querySelector('.list').appendChild(item);
   }
   
   // ✅ Good - cache the element
   const list = document.querySelector('.list');
   for (let i = 0; i < 100; i++) {
       list.appendChild(item);
   }
   ```

2. **Use Document Fragments for Multiple Elements**
   ```javascript
   const fragment = document.createDocumentFragment();
   for (let i = 0; i < 100; i++) {
       const li = document.createElement('li');
       li.textContent = `Item ${i}`;
       fragment.appendChild(li);
   }
   list.appendChild(fragment);  // Single reflow
   ```

3. **Prefer textContent over innerHTML**
   - `textContent` is faster and safer (prevents XSS)
   - Use `innerHTML` only when you need to parse HTML

4. **Use classList over className**
   - More readable and maintainable
   - Better for toggling/adding/removing individual classes

## Key Takeaways

1. Use `querySelector()` and `querySelectorAll()` for selecting elements
2. `createElement()` and `appendChild()` for creating new elements
3. `classList` for managing CSS classes
4. Cache DOM queries for better performance
5. Use Document Fragments for bulk operations

## Exercises

See `exercises.js` for practice problems and `solutions.js` for complete solutions.

### Level 1
1. Select an element by ID and change its text content
2. Create a new paragraph element and append it to the body
3. Add a CSS class to an element
4. Get all elements with a specific class name

### Level 2
1. Create a function that generates an HTML list from an array
2. Toggle a class on an element when clicked
3. Change multiple CSS properties of an element
4. Remove all child elements from a container

### Level 3
1. Build a dynamic card grid from data
2. Implement a search filter for list items
3. Create a collapsible accordion component
4. Build a simple image gallery with modal

## Resources

- [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [JavaScript.info: DOM](https://javascript.info/document)

---

**Next:** [Day 17 - Events](../Day17_Events/README.md)
