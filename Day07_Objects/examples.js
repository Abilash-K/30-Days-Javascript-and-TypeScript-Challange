// Day 07 - Objects - Examples

console.log('=== CREATING OBJECTS ===\n');

// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
};

console.log('Person object:', person);

// Empty object
const emptyObj = {};
console.log('Empty object:', emptyObj);

// Using Object constructor
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';
car.year = 2024;
console.log('Car object:', car);

// ========================================
console.log('\n=== ACCESSING PROPERTIES ===\n');

// Dot notation
console.log('First name:', person.firstName);
console.log('Age:', person.age);

// Bracket notation
console.log('Last name:', person['lastName']);
console.log('City:', person['city']);

// Dynamic property access
const prop = 'age';
console.log('Dynamic access:', person[prop]);

// ========================================
console.log('\n=== MODIFYING PROPERTIES ===\n');

// Update existing property
person.age = 31;
console.log('Updated age:', person.age);

// Add new property
person.country = 'USA';
console.log('Added country:', person.country);

// Delete property
delete person.city;
console.log('After deleting city:', person);

// ========================================
console.log('\n=== OBJECT METHODS ===\n');

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    // ES6 shorthand
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b !== 0 ? a / b : 'Cannot divide by zero';
    }
};

console.log('5 + 3 =', calculator.add(5, 3));
console.log('10 - 4 =', calculator.subtract(10, 4));
console.log('6 * 7 =', calculator.multiply(6, 7));
console.log('20 / 4 =', calculator.divide(20, 4));

// ========================================
console.log('\n=== THIS KEYWORD ===\n');

const user = {
    name: 'Alice',
    age: 25,
    greet: function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    },
    birthday() {
        this.age++;
        return `Happy birthday! Now ${this.age} years old.`;
    }
};

console.log(user.greet());
console.log(user.birthday());
console.log(user.greet());

// ========================================
console.log('\n=== OBJECT METHODS (BUILT-IN) ===\n');

const student = {
    name: 'Bob',
    grade: 'A',
    subjects: ['Math', 'Science', 'English']
};

// Object.keys() - get array of keys
console.log('Keys:', Object.keys(student));

// Object.values() - get array of values
console.log('Values:', Object.values(student));

// Object.entries() - get array of [key, value] pairs
console.log('Entries:', Object.entries(student));

// Object.assign() - copy/merge objects
const defaults = { theme: 'light', language: 'en' };
const userPrefs = { theme: 'dark' };
const settings = Object.assign({}, defaults, userPrefs);
console.log('Merged settings:', settings);

// ========================================
console.log('\n=== CHECKING PROPERTIES ===\n');

const book = {
    title: 'JavaScript Guide',
    author: 'John Doe',
    year: 2024
};

// hasOwnProperty()
console.log('Has title?', book.hasOwnProperty('title'));
console.log('Has publisher?', book.hasOwnProperty('publisher'));

// in operator
console.log('author in book?', 'author' in book);
console.log('price in book?', 'price' in book);

// Check if undefined
console.log('book.publisher:', book.publisher);  // undefined

// ========================================
console.log('\n=== NESTED OBJECTS ===\n');

const company = {
    name: 'Tech Corp',
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94102'
    },
    employees: [
        { name: 'Alice', role: 'Developer' },
        { name: 'Bob', role: 'Designer' },
        { name: 'Charlie', role: 'Manager' }
    ]
};

console.log('Company:', company.name);
console.log('City:', company.address.city);
console.log('First employee:', company.employees[0].name);

// ========================================
console.log('\n=== OBJECT DESTRUCTURING ===\n');

const product = {
    id: 101,
    name: 'Laptop',
    price: 999,
    brand: 'Dell'
};

// Basic destructuring
const { name, price } = product;
console.log('Name:', name);
console.log('Price:', price);

// Rename variables
const { name: productName, brand: manufacturer } = product;
console.log('Product:', productName);
console.log('Brand:', manufacturer);

// Default values
const { id, warranty = '1 year' } = product;
console.log('ID:', id);
console.log('Warranty:', warranty);

// ========================================
console.log('\n=== OBJECT SPREADING ===\n');

const baseUser = {
    username: 'john123',
    email: 'john@example.com'
};

// Spread to copy
const newUser = { ...baseUser };
console.log('Copied user:', newUser);

// Spread to merge
const extraInfo = {
    age: 30,
    city: 'Boston'
};
const fullUser = { ...baseUser, ...extraInfo };
console.log('Full user:', fullUser);

// Override properties
const updatedUser = { ...baseUser, email: 'newemail@example.com' };
console.log('Updated user:', updatedUser);

// ========================================
console.log('\n=== OBJECT FREEZE & SEAL ===\n');

// Object.freeze() - cannot add, delete, or modify
const frozenObj = Object.freeze({ value: 42 });
frozenObj.value = 100;  // Silently fails
frozenObj.newProp = 'test';  // Silently fails
console.log('Frozen object:', frozenObj);  // Still { value: 42 }

// Object.seal() - cannot add or delete, but can modify
const sealedObj = Object.seal({ count: 10 });
sealedObj.count = 20;  // Works
sealedObj.newProp = 'test';  // Fails
console.log('Sealed object:', sealedObj);  // { count: 20 }

// ========================================
console.log('\n=== PRACTICAL EXAMPLES ===\n');

// Example 1: Bank Account
console.log('--- Bank Account ---');
const bankAccount = {
    accountNumber: '123456',
    balance: 1000,
    owner: 'John Doe',
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return 'Invalid amount';
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        }
        return 'Invalid amount or insufficient funds';
    },
    
    getBalance() {
        return `Current balance: $${this.balance}`;
    }
};

console.log(bankAccount.getBalance());
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200));
console.log(bankAccount.getBalance());

// Example 2: Shopping Cart
console.log('\n--- Shopping Cart ---');
const shoppingCart = {
    items: [],
    
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
        return `Added ${quantity} x ${name}`;
    },
    
    removeItem(name) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.items.splice(index, 1);
            return `Removed ${name}`;
        }
        return 'Item not found';
    },
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    },
    
    getItems() {
        return this.items;
    }
};

console.log(shoppingCart.addItem('Apple', 1.5, 3));
console.log(shoppingCart.addItem('Banana', 0.8, 5));
console.log('Cart items:', shoppingCart.getItems());
console.log('Total: $' + shoppingCart.getTotal().toFixed(2));

// Example 3: Student Grade Manager
console.log('\n--- Student Grades ---');
const studentGrades = {
    name: 'Emma',
    grades: {
        math: 85,
        science: 92,
        english: 88,
        history: 90
    },
    
    addGrade(subject, grade) {
        this.grades[subject] = grade;
    },
    
    getAverage() {
        const values = Object.values(this.grades);
        const sum = values.reduce((a, b) => a + b, 0);
        return (sum / values.length).toFixed(2);
    },
    
    getLetterGrade() {
        const avg = this.getAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        return 'F';
    }
};

console.log('Student:', studentGrades.name);
console.log('Grades:', studentGrades.grades);
console.log('Average:', studentGrades.getAverage());
console.log('Letter Grade:', studentGrades.getLetterGrade());

// Example 4: Todo List
console.log('\n--- Todo List ---');
const todoList = {
    todos: [],
    nextId: 1,
    
    add(task) {
        this.todos.push({
            id: this.nextId++,
            task: task,
            completed: false
        });
    },
    
    complete(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
        }
    },
    
    list() {
        return this.todos.map(t => 
            `[${t.completed ? '✓' : ' '}] ${t.id}. ${t.task}`
        );
    }
};

todoList.add('Learn JavaScript');
todoList.add('Build a project');
todoList.add('Practice coding');
todoList.complete(1);
console.log(todoList.list().join('\n'));
