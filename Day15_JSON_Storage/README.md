# Day 15 - JSON and Local Storage

Master JSON manipulation and browser storage APIs!

## JSON (JavaScript Object Notation)

```javascript
// Object to JSON string
const obj = { name: 'John', age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);  // '{"name":"John","age":30}'

// JSON string to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name);  // 'John'
```

## LocalStorage

Persist data in the browser (survives page reloads).

```javascript
// Save data
localStorage.setItem('username', 'John');
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));

// Retrieve data
const username = localStorage.getItem('username');
const user = JSON.parse(localStorage.getItem('user'));

// Remove data
localStorage.removeItem('username');

// Clear all
localStorage.clear();
```

## SessionStorage

Similar to localStorage but cleared when tab/window closes.

```javascript
sessionStorage.setItem('temp', 'data');
const temp = sessionStorage.getItem('temp');
sessionStorage.removeItem('temp');
```

## Practical Example

```javascript
// Shopping cart
const cart = {
    items: [],
    addItem(product) {
        this.items.push(product);
        this.save();
    },
    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },
    load() {
        const data = localStorage.getItem('cart');
        this.items = data ? JSON.parse(data) : [];
    }
};

cart.load();
cart.addItem({ id: 1, name: 'Product', price: 29.99 });
```

See `examples.js`, `exercises.js`, and `solutions.js`.

---

**Next:** [Day 16 - DOM Manipulation](../Day16_DOM/README.md)
