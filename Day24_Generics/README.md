# Day 24 - Generics

Master generic programming - write reusable, type-safe code!

## Generic Functions

```typescript
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");
const auto = identity(true);  // Type inferred
```

## Generic Classes

```typescript
class Box<T> {
    constructor(private value: T) {}
    
    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("hello");
```

## Generic Constraints

```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

logLength("hello");  // ✓
logLength([1, 2, 3]);  // ✓
// logLength(123);  // ✗ Error
```

## Multiple Type Parameters

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair<string, number>("age", 25);
```

## Resources

- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

---

**Next:** [Day 25 - Advanced Types](../Day25_Advanced_Types/README.md)
