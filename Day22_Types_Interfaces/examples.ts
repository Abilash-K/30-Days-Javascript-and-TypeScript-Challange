// Day 22 - Types and Interfaces - Examples

console.log('=== Day 22: Types and Interfaces ===\n');

// Basic type annotations
const userName: string = "Alice";
const userAge: number = 30;
const isActive: boolean = true;

console.log('Basic types:', { userName, userAge, isActive });

// Interface definition
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25
};

const user2: User = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com"
};

console.log('Users:', user1, user2);

// Type alias
type ID = string | number;
type Status = "pending" | "approved" | "rejected";

const userId: ID = 123;
const orderId: ID = "ORD-456";
const orderStatus: Status = "pending";

console.log('Type aliases:', { userId, orderId, orderStatus });

// Function interface
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log('Math operations:', add(5, 3), multiply(5, 3));

// Readonly and optional
interface Config {
    readonly apiKey: string;
    timeout?: number;
}

const config: Config = {
    apiKey: "secret123",
    timeout: 5000
};

console.log('Config:', config);

// Extending interfaces
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever"
};

console.log('Dog:', myDog);

// Index signature
interface StringMap {
    [key: string]: string;
}

const colors: StringMap = {
    primary: "#007bff",
    secondary: "#6c757d"
};

console.log('Colors:', colors);

console.log('\n=== Examples Complete ===');
