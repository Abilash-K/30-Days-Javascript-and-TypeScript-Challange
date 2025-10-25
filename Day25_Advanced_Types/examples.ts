// Day 25 - Advanced Types - Examples

console.log('=== Day 25: Advanced Types ===\n');

// Union types
type Status = "success" | "error" | "loading";
const status: Status = "success";
console.log('Union type:', status);

// Intersection types
type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;

const staff: Staff = { name: "John", id: 123 };
console.log('Intersection:', staff);

// Type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// Utility types
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserKeys = keyof User;

console.log('\n=== Examples Complete ===');
