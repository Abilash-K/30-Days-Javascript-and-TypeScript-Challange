# Day 12 - Regular Expressions

Learn pattern matching with RegEx in JavaScript!

## Creating RegEx

```javascript
// Literal notation
const pattern1 = /hello/;

// Constructor
const pattern2 = new RegExp('hello');
```

## Basic Patterns

```javascript
// Test method
const pattern = /javascript/i;  // i = case-insensitive
console.log(pattern.test('JavaScript'));  // true

// Match method
const text = 'Hello World';
const result = text.match(/world/i);
```

## Common Patterns

```javascript
// Email
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone
const phone = /^\d{3}-\d{3}-\d{4}$/;

// URL
const url = /^https?:\/\/.+/;

// Digits only
const digits = /^\d+$/;
```

## Methods

```javascript
// test() - returns true/false
/hello/.test('hello world');  // true

// match() - returns matches
'hello world'.match(/hello/);

// replace() - replace matches
'hello world'.replace(/world/, 'there');

// search() - returns index
'hello world'.search(/world/);  // 6
```

## Flags

- `g` - Global (find all matches)
- `i` - Case-insensitive
- `m` - Multiline
- `s` - Dot matches newline
- `u` - Unicode
- `y` - Sticky

See `examples.js`, `exercises.js`, and `solutions.js` for more.

---

**Next:** [Day 13 - Error Handling](../Day13_Error_Handling/README.md)
