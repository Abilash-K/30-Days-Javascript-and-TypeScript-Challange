// Day 24 - Generics - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. First element
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log('1. First:', first([1, 2, 3]));

// 2. Generic Stack
class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
}
const stack = new Stack<number>();
stack.push(1);
console.log('2. Stack created');

// 3. Swap function
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}
console.log('3. Swap:', swap(1, 2));

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// 1. Generic Repository
interface Repository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    create(item: T): Promise<T>;
}
console.log('1. Repository interface defined');

// 2. API Client
class APIClient<T> {
    constructor(private baseURL: string) {}
    
    async get(endpoint: string): Promise<T> {
        return {} as T;  // Simplified
    }
}
console.log('2. API Client created');

console.log('\n=== All Solutions Complete ===');
