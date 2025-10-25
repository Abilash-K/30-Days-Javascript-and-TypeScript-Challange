# Day 22 - Types and Interfaces

Master TypeScript's powerful type system with custom types and interfaces!

## Table of Contents
- [Type Annotations](#type-annotations)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Optional and Readonly Properties](#optional-and-readonly-properties)
- [Index Signatures](#index-signatures)
- [Extending Interfaces](#extending-interfaces)
- [Type vs Interface](#type-vs-interface)
- [Best Practices](#best-practices)

## Type Annotations

```typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let tags: string[] = ["typescript", "javascript"];

// Object types
let user: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

// Function types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const add = (a: number, b: number): number => a + b;
```

## Interfaces

Interfaces define the shape of objects:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;  // Optional property
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};

// Function interface
interface SearchFunc {
    (source: string, substring: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
    return src.includes(sub);
};
```

## Type Aliases

```typescript
type ID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;

// Union types
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";

// Intersection types
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const staff: Staff = {
    name: "Alice",
    employeeId: 123
};
```

## Optional and Readonly Properties

```typescript
interface Config {
    readonly apiKey: string;
    timeout?: number;
    retries?: number;
}

const config: Config = {
    apiKey: "abc123",
    timeout: 5000
};

// config.apiKey = "new"; // Error: cannot modify readonly
```

## Index Signatures

```typescript
// Dictionary/Map pattern
interface StringMap {
    [key: string]: string;
}

const colors: StringMap = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745"
};

// Array-like objects
interface NumberArray {
    [index: number]: number;
}
```

## Extending Interfaces

```typescript
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    bark() {
        console.log("Woof!");
    }
};

// Multiple inheritance
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

interface Duck extends Animal, Flyable, Swimmable {
    quack(): void;
}
```

## Type vs Interface

```typescript
// Type can use unions
type ID = string | number;

// Interface can be extended
interface User {
    name: string;
}

interface Admin extends User {
    privileges: string[];
}

// Type can use computed properties
type Keys = "name" | "age";
type Person = {
    [K in Keys]: string;
};

// Interface can be merged
interface Window {
    title: string;
}

interface Window {
    version: number;
}
// Window now has both title and version
```

**When to use what:**
- Use **interface** for object shapes that might be extended
- Use **type** for unions, intersections, and complex types
- Both work for most cases - consistency matters most

## Best Practices

1. **Prefer interfaces for objects**
   ```typescript
   interface User {
       name: string;
       email: string;
   }
   ```

2. **Use type for unions and complex types**
   ```typescript
   type Status = "active" | "inactive";
   type Result<T> = { success: true; data: T } | { success: false; error: string };
   ```

3. **Make properties readonly when appropriate**
   ```typescript
   interface Config {
       readonly apiUrl: string;
   }
   ```

4. **Use optional properties sparingly**
   ```typescript
   interface User {
       name: string;
       email?: string;  // Only if truly optional
   }
   ```

## Exercises

See `exercises.ts` and `solutions.ts` for practice.

## Resources

- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Handbook - Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

---

**Next:** [Day 23 - TypeScript Classes](../Day23_TS_Classes/README.md)
