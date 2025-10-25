// Day 25 - Advanced Types - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. Union types
type Result<T> = { success: true; data: T } | { success: false; error: string };

function getResult(): Result<number> {
    return { success: true, data: 42 };
}

console.log('1. Result:', getResult());

// 2. Intersection
type HasName = { name: string };
type HasAge = { age: number };
type PersonInfo = HasName & HasAge;

const person: PersonInfo = { name: "Alice", age: 30 };
console.log('2. Person:', person);

// 3. Mapped types
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type MyPartial<T> = { [K in keyof T]?: T[K] };

console.log('3. Mapped types defined');

// 4. Type guard
function isNumber(val: unknown): val is number {
    return typeof val === "number";
}

console.log('4. Type guard:', isNumber(42));

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type ExtractString<T> = T extends string ? T : never;

console.log('Conditional types defined');

console.log('\n=== All Solutions Complete ===');
