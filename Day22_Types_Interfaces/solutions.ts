// Day 22 - Types and Interfaces - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. Book interface
interface Book {
    title: string;
    author: string;
    pages: number;
    isbn: string;
}

const book: Book = {
    title: "TypeScript Deep Dive",
    author: "Basarat Ali Syed",
    pages: 300,
    isbn: "978-1234567890"
};

console.log('1. Book:', book);

// 2. UserRole type
type UserRole = "admin" | "user" | "guest";

const role: UserRole = "admin";
console.log('2. Role:', role);

// 3. Product with optional discount
interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99
};

console.log('3. Product:', product);

// 4. Calculator function type
type CalculatorOp = (a: number, b: number) => number;

const add: CalculatorOp = (a, b) => a + b;
console.log('4. Calculator:', add(5, 3));

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// 1. Interface hierarchy
interface Vehicle {
    brand: string;
    model: string;
    year: number;
}

interface Car extends Vehicle {
    doors: number;
    fuelType: string;
}

interface ElectricCar extends Car {
    batteryCapacity: number;
    range: number;
}

const tesla: ElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    doors: 4,
    fuelType: "Electric",
    batteryCapacity: 75,
    range: 350
};

console.log('1. Electric Car:', tesla);

// 2. API Response type
type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: string };

const successResponse: ApiResponse<User> = {
    success: true,
    data: { id: 1, name: "Alice", email: "alice@example.com" }
};

console.log('2. API Response:', successResponse);

// 3. Dictionary interface
interface Dictionary<T> {
    [key: string]: T;
}

const settings: Dictionary<string> = {
    theme: "dark",
    language: "en",
    timezone: "UTC"
};

console.log('3. Dictionary:', settings);

// 4. Intersection types
type Person = { name: string; age: number };
type Employee = { employeeId: string; department: string };
type Manager = Person & Employee & { team: string[] };

const manager: Manager = {
    name: "Bob",
    age: 40,
    employeeId: "E123",
    department: "Engineering",
    team: ["Alice", "Charlie"]
};

console.log('4. Manager:', manager);

console.log('\n=== LEVEL 3 SOLUTIONS ===\n');

// 1. Generic Repository interface
interface Repository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    create(item: Omit<T, 'id'>): Promise<T>;
    update(id: number, item: Partial<T>): Promise<T>;
    delete(id: number): Promise<boolean>;
}

interface User {
    id: number;
    name: string;
    email: string;
}

console.log('1. Repository pattern defined');

// 2. E-commerce type system
type ProductId = string;
type CategoryId = string;

interface EcommerceProduct {
    id: ProductId;
    name: string;
    price: number;
    categoryId: CategoryId;
    stock: number;
}

interface Cart {
    items: Array<{
        product: EcommerceProduct;
        quantity: number;
    }>;
    total: number;
}

interface Order {
    id: string;
    userId: number;
    items: Cart['items'];
    status: "pending" | "shipped" | "delivered";
    createdAt: Date;
}

console.log('2. E-commerce system defined');

// 3. Utility types
type Optional<T> = {
    [K in keyof T]?: T[K];
};

type Required<T> = {
    [K in keyof T]-?: T[K];
};

console.log('3. Utility types defined');

// 4. Event Emitter
interface EventMap {
    [event: string]: any;
}

interface TypedEventEmitter<T extends EventMap> {
    on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void;
    emit<K extends keyof T>(event: K, data: T[K]): void;
}

interface MyEvents {
    'user:login': { userId: number; timestamp: Date };
    'user:logout': { userId: number };
}

console.log('4. Type-safe event emitter defined');

console.log('\n=== All Solutions Complete ===');
