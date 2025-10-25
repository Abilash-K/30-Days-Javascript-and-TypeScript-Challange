// Day 24 - Generics - Examples

console.log('=== Day 24: Generics ===\n');

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

console.log('Generic function:', identity<number>(42), identity<string>("hello"));

// Generic class
class GenericBox<T> {
    constructor(private value: T) {}
    getValue(): T { return this.value; }
}

const box1 = new GenericBox<number>(123);
const box2 = new GenericBox<string>("test");
console.log('Generic classes:', box1.getValue(), box2.getValue());

// Generic constraints
interface HasLength { length: number; }

function logLength<T extends HasLength>(arg: T): void {
    console.log('Length:', arg.length);
}

logLength("hello");
logLength([1, 2, 3]);

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log('Pair:', pair("age", 25));

console.log('\n=== Examples Complete ===');
