# Day 25 - Advanced Types

Master advanced TypeScript type features!

## Union Types

```typescript
type Status = "success" | "error" | "loading";
type ID = string | number;

function printID(id: ID): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}
```

## Intersection Types

```typescript
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const staff: Staff = {
    name: "John",
    employeeId: 123
};
```

## Mapped Types

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};
```

## Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

## Template Literal Types

```typescript
type Greeting = `Hello ${string}`;
type Method = "GET" | "POST";
type Endpoint = `/api/${string}`;
```

---

**Next:** [Day 26 - Modules](../Day26_Modules/README.md)
