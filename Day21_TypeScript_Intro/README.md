# Day 21 - Introduction to TypeScript

Welcome to Day 21! Today we transition from JavaScript to TypeScript. You'll learn what TypeScript is, why it's useful, and how to get started.

## Table of Contents
- [What is TypeScript?](#what-is-typescript)
- [Why TypeScript?](#why-typescript)
- [Setting Up TypeScript](#setting-up-typescript)
- [Basic Types](#basic-types)
- [Type Annotations](#type-annotations)
- [Type Inference](#type-inference)
- [Arrays and Tuples](#arrays-and-tuples)
- [Objects](#objects)
- [Functions](#functions)
- [Union Types](#union-types)
- [Type Aliases](#type-aliases)
- [Exercises](#exercises)

## What is TypeScript?

**TypeScript** is a superset of JavaScript that adds **static typing** and other features to JavaScript. It was developed by Microsoft.

Key points:
- TypeScript code compiles to JavaScript
- All JavaScript is valid TypeScript
- Adds type safety to JavaScript
- Catches errors at compile time, not runtime
- Improves code quality and maintainability

```
TypeScript Code (.ts) → TypeScript Compiler → JavaScript Code (.js)
```

## Why TypeScript?

### Benefits

1. **Early Error Detection**
   ```typescript
   // JavaScript - Error at runtime
   function add(a, b) {
       return a + b;
   }
   console.log(add('5', 3)); // "53" (unexpected)
   
   // TypeScript - Error at compile time
   function add(a: number, b: number): number {
       return a + b;
   }
   console.log(add('5', 3)); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
   ```

2. **Better IDE Support**
   - Auto-completion
   - IntelliSense
   - Refactoring tools
   - Documentation

3. **Self-Documenting Code**
   ```typescript
   // Clear what the function expects and returns
   function getUserName(userId: number): string {
       // implementation
   }
   ```

4. **Easier Refactoring**
   - Type checking helps identify all places that need updates
   - Reduces bugs during refactoring

5. **Better for Large Projects**
   - Easier to maintain
   - Easier for teams to collaborate
   - Catches errors before they reach production

## Setting Up TypeScript

### Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org)

2. **Install TypeScript globally**
   ```bash
   npm install -g typescript
   ```

3. **Check installation**
   ```bash
   tsc --version
   ```

### Creating Your First TypeScript File

1. Create a file `hello.ts`:
   ```typescript
   const message: string = 'Hello, TypeScript!';
   console.log(message);
   ```

2. Compile to JavaScript:
   ```bash
   tsc hello.ts
   ```

3. This creates `hello.js`:
   ```javascript
   var message = 'Hello, TypeScript!';
   console.log(message);
   ```

4. Run the JavaScript:
   ```bash
   node hello.js
   ```

### TypeScript Configuration

Create `tsconfig.json` for project configuration:

```bash
tsc --init
```

Basic `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Basic Types

TypeScript has all JavaScript types plus additional ones.

### Primitive Types

```typescript
// String
let firstName: string = 'John';
let lastName: string = "Doe";
let greeting: string = `Hello, ${firstName}!`;

// Number
let age: number = 25;
let price: number = 19.99;
let hex: number = 0xFF;

// Boolean
let isActive: boolean = true;
let isComplete: boolean = false;

// Undefined
let notDefined: undefined = undefined;

// Null
let empty: null = null;

// Symbol
let id: symbol = Symbol('unique');

// BigInt
let bigNumber: bigint = 100n;
```

### Any Type

`any` disables type checking (use sparingly):

```typescript
let value: any = 'hello';
value = 42;        // OK
value = true;      // OK
value = [];        // OK

// ⚠️ Defeats the purpose of TypeScript
// Use only when necessary (e.g., migrating from JS)
```

### Unknown Type

`unknown` is a type-safe alternative to `any`:

```typescript
let value: unknown = 'hello';

// Must check type before using
if (typeof value === 'string') {
    console.log(value.toUpperCase()); // OK
}

// ❌ Error without type check
// console.log(value.toUpperCase());
```

### Void Type

For functions that don't return a value:

```typescript
function logMessage(message: string): void {
    console.log(message);
    // No return statement
}
```

### Never Type

For functions that never return:

```typescript
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // infinite loop
    }
}
```

## Type Annotations

Type annotations explicitly specify types.

### Variable Annotations

```typescript
let name: string = 'Alice';
let age: number = 30;
let isStudent: boolean = true;

// Multiple variables
let x: number, y: number, z: number;
x = 1;
y = 2;
z = 3;
```

### Constant Annotations

```typescript
const PI: number = 3.14159;
const APP_NAME: string = 'MyApp';
```

## Type Inference

TypeScript can infer types automatically.

```typescript
// TypeScript infers type as string
let message = 'Hello';  // message: string

// TypeScript infers type as number
let count = 42;         // count: number

// Inference with functions
function add(a: number, b: number) {
    return a + b;  // TypeScript infers return type as number
}

// Better to be explicit for clarity
function multiply(a: number, b: number): number {
    return a * b;
}
```

**Best Practice:** Use type inference for simple cases, explicit types for clarity.

## Arrays and Tuples

### Arrays

Two ways to define array types:

```typescript
// Method 1: Type[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

// Method 2: Array<Type>
let scores: Array<number> = [90, 85, 92];
let cities: Array<string> = ['New York', 'London', 'Tokyo'];

// Mixed types (not recommended)
let mixed: any[] = [1, 'hello', true];

// Array of arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Tuples

Fixed-length arrays with specific types for each position:

```typescript
// Define a tuple
let person: [string, number] = ['Alice', 30];

// Access elements
console.log(person[0]); // "Alice" (string)
console.log(person[1]); // 30 (number)

// ❌ Error: wrong types
// person = [30, 'Alice'];

// Named tuples (TypeScript 4.0+)
let coordinate: [x: number, y: number] = [10, 20];

// Optional tuple elements
let point: [number, number, number?] = [1, 2];
```

## Objects

### Object Type Annotations

```typescript
// Basic object type
let user: {
    name: string;
    age: number;
    email: string;
} = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

// Optional properties
let product: {
    id: number;
    name: string;
    description?: string;  // Optional
} = {
    id: 1,
    name: 'Laptop'
    // description is optional
};

// Readonly properties
let config: {
    readonly apiKey: string;
    timeout: number;
} = {
    apiKey: 'abc123',
    timeout: 5000
};

// ❌ Error: Cannot reassign readonly property
// config.apiKey = 'new-key';
```

## Functions

### Function Type Annotations

```typescript
// Named function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a: number, b: number): number {
    return a + b;
};

// Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Concise arrow function
const square = (x: number): number => x * x;
```

### Optional Parameters

```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

console.log(buildName('John'));          // "John"
console.log(buildName('John', 'Doe'));   // "John Doe"
```

### Default Parameters

```typescript
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}

console.log(greet('Alice'));              // "Hello, Alice!"
console.log(greet('Bob', 'Hi'));          // "Hi, Bob!"
```

### Rest Parameters

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15
```

### Function Type

```typescript
// Function type
let myFunc: (a: number, b: number) => number;

myFunc = function(x: number, y: number): number {
    return x + y;
};

console.log(myFunc(5, 3)); // 8
```

## Union Types

A value can be one of several types:

```typescript
// Union type
let id: number | string;

id = 101;      // OK
id = 'A101';   // OK
// id = true;  // ❌ Error

// Function with union parameter
function printId(id: number | string): void {
    console.log(`ID: ${id}`);
}

printId(101);      // OK
printId('A101');   // OK

// Type narrowing
function process(value: number | string): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase()); // string methods
    } else {
        console.log(value.toFixed(2));    // number methods
    }
}
```

## Type Aliases

Create custom type names:

```typescript
// Type alias for primitive
type ID = number | string;

let userId: ID = 101;
let productId: ID = 'P001';

// Type alias for object
type User = {
    id: ID;
    name: string;
    email: string;
    age?: number;
};

const user: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
};

// Type alias for function
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Complex type alias
type Point = {
    x: number;
    y: number;
};

type Shape = {
    color: string;
    center: Point;
};

const circle: Shape = {
    color: 'red',
    center: { x: 0, y: 0 }
};
```

## Practical Examples

### Example 1: User Management

```typescript
type UserRole = 'admin' | 'user' | 'guest';

type User = {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    isActive: boolean;
};

function createUser(username: string, email: string, role: UserRole = 'user'): User {
    return {
        id: Date.now(),
        username,
        email,
        role,
        isActive: true
    };
}

const admin = createUser('admin', 'admin@example.com', 'admin');
const regularUser = createUser('john', 'john@example.com');
```

### Example 2: Shopping Cart

```typescript
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

function calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}
```

## Exercises

### Level 1

1. Install TypeScript and create your first `.ts` file
2. Create variables with type annotations for: string, number, boolean
3. Create an array of numbers and an array of strings
4. Create a function that takes two numbers and returns their sum
5. Create a function with an optional parameter
6. Create a tuple for storing a person's name and age
7. Use type inference to declare variables
8. Create an object with type annotations
9. Create a function that uses a union type
10. Create a type alias for a user object

### Level 2

1. Create a `Person` type alias with properties: name, age, email
2. Create a function that accepts a union type (number | string) and handles both
3. Create a readonly object type
4. Create a function with default parameters
5. Create a function with rest parameters
6. Create an array of objects with proper typing
7. Create nested object types
8. Use type narrowing with typeof
9. Create a tuple with optional elements
10. Create function types and assign functions to them

### Level 3

1. Create a complete type system for a todo application
2. Create a type-safe event emitter
3. Build a typed calculator with multiple operations
4. Create a user authentication system with proper types
5. Design types for an e-commerce product catalog
6. Create a typed API response handler
7. Build a form validation system with TypeScript
8. Create a typed state management system
9. Design types for a blog platform
10. Create a typed routing system

## Summary

Today you learned:
- What TypeScript is and why it's beneficial
- How to set up and configure TypeScript
- Basic types in TypeScript
- Type annotations and type inference
- Working with arrays and tuples
- Object type annotations
- Function types and parameters
- Union types for flexibility
- Type aliases for reusability

**Tomorrow:** We'll explore interfaces and advanced type features!

## Additional Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

**Congratulations!** 🎉 You've started your TypeScript journey!

[<< Day 20](../Day20_Fetch_API/README.md) | [Day 22 >>](../Day22_Types_Interfaces/README.md)
