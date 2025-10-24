// Day 14 - Classes and OOP Examples

// ========================================
// 1. BASIC CLASS STRUCTURE
// ========================================

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    introduce() {
        console.log(`Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Jane', 'Smith', 25);

console.log('--- Basic Class Example ---');
console.log(person1.getFullName());
person1.introduce();
person2.introduce();

// ========================================
// 2. CLASS WITH GETTERS AND SETTERS
// ========================================

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    get width() {
        return this._width;
    }
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log('Width must be positive');
        }
    }
    
    get height() {
        return this._height;
    }
    
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log('Height must be positive');
        }
    }
    
    get area() {
        return this._width * this._height;
    }
    
    get perimeter() {
        return 2 * (this._width + this._height);
    }
}

console.log('\n--- Getters and Setters ---');
const rect = new Rectangle(10, 5);
console.log('Area:', rect.area);
console.log('Perimeter:', rect.perimeter);

rect.width = 15;
console.log('New area:', rect.area);

// ========================================
// 3. INHERITANCE
// ========================================

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
    
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    
    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
    
    fetch() {
        console.log(`${this.name} is fetching the ball`);
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    
    makeSound() {
        console.log(`${this.name} meows: Meow!`);
    }
    
    scratch() {
        console.log(`${this.name} is scratching`);
    }
}

console.log('\n--- Inheritance Example ---');
const dog = new Dog('Buddy', 3, 'Golden Retriever');
const cat = new Cat('Whiskers', 2, 'Orange');

dog.makeSound();
dog.eat();
dog.fetch();

cat.makeSound();
cat.sleep();
cat.scratch();

// ========================================
// 4. STATIC METHODS
// ========================================

class MathHelper {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static divide(a, b) {
        return b !== 0 ? a / b : 'Cannot divide by zero';
    }
    
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log('\n--- Static Methods ---');
console.log('Add 5 + 3:', MathHelper.add(5, 3));
console.log('Multiply 4 * 7:', MathHelper.multiply(4, 7));
console.log('Circle area (r=5):', MathHelper.circleArea(5));
console.log('PI constant:', MathHelper.PI);

// ========================================
// 5. BANK ACCOUNT EXAMPLE
// ========================================

class BankAccount {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({
                type: 'deposit',
                amount: amount,
                date: new Date().toLocaleString()
            });
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be positive');
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({
                type: 'withdrawal',
                amount: amount,
                date: new Date().toLocaleString()
            });
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            console.log('Withdrawal amount must be positive');
        }
    }
    
    getBalance() {
        return this.balance;
    }
    
    getStatement() {
        console.log(`\nAccount Statement for ${this.owner}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: $${this.balance}\n`);
        console.log('Recent Transactions:');
        this.transactions.forEach((tx, index) => {
            console.log(`${index + 1}. ${tx.type.toUpperCase()}: $${tx.amount} on ${tx.date}`);
        });
    }
}

console.log('\n--- Bank Account Example ---');
const account = new BankAccount('ACC001', 'Alice Johnson', 1000);
account.deposit(500);
account.withdraw(200);
account.deposit(1000);
account.withdraw(300);
account.getStatement();

// ========================================
// 6. SHOPPING CART EXAMPLE
// ========================================

class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    getInfo() {
        return `${this.name} - $${this.price} (${this.stock} in stock)`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        if (quantity <= product.stock) {
            const existingItem = this.items.find(item => item.product.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ product, quantity });
            }
            
            console.log(`Added ${quantity} x ${product.name} to cart`);
        } else {
            console.log(`Only ${product.stock} ${product.name} available`);
        }
    }
    
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index > -1) {
            console.log(`Removed ${this.items[index].product.name} from cart`);
            this.items.splice(index, 1);
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
    
    showCart() {
        console.log('\n--- Shopping Cart ---');
        if (this.items.length === 0) {
            console.log('Cart is empty');
            return;
        }
        
        this.items.forEach((item, index) => {
            const subtotal = item.product.price * item.quantity;
            console.log(`${index + 1}. ${item.product.name} x ${item.quantity} = $${subtotal}`);
        });
        console.log(`\nTotal: $${this.getTotal()}`);
    }
}

console.log('\n--- Shopping Cart Example ---');
const laptop = new Product('P001', 'Laptop', 999, 5);
const mouse = new Product('P002', 'Mouse', 25, 10);
const keyboard = new Product('P003', 'Keyboard', 75, 8);

const cart = new ShoppingCart();
cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(keyboard, 1);
cart.showCart();

// ========================================
// 7. TODO LIST EXAMPLE
// ========================================

class Todo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
    }
    
    toggle() {
        this.completed = !this.completed;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    addTodo(text) {
        const todo = new Todo(this.nextId++, text);
        this.todos.push(todo);
        console.log(`Added: "${text}"`);
    }
    
    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            console.log(`Removed: "${this.todos[index].text}"`);
            this.todos.splice(index, 1);
        }
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.toggle();
            console.log(`Toggled: "${todo.text}" - ${todo.completed ? 'Completed' : 'Not completed'}`);
        }
    }
    
    showTodos() {
        console.log('\n--- Todo List ---');
        if (this.todos.length === 0) {
            console.log('No todos');
            return;
        }
        
        this.todos.forEach(todo => {
            const status = todo.completed ? '✓' : '○';
            console.log(`${status} [${todo.id}] ${todo.text}`);
        });
    }
    
    getCompletedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
}

console.log('\n--- Todo List Example ---');
const myTodos = new TodoList();
myTodos.addTodo('Learn JavaScript');
myTodos.addTodo('Build a project');
myTodos.addTodo('Practice coding');
myTodos.showTodos();

myTodos.toggleTodo(1);
myTodos.toggleTodo(3);
myTodos.showTodos();

console.log(`Completed: ${myTodos.getCompletedCount()} out of ${myTodos.todos.length}`);

// ========================================
// 8. GAME CHARACTER EXAMPLE
// ========================================

class Character {
    constructor(name, health = 100, attackPower = 10) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.attackPower = attackPower;
        this.isAlive = true;
        this.level = 1;
    }
    
    attack(target) {
        if (this.isAlive && target.isAlive) {
            console.log(`${this.name} attacks ${target.name}!`);
            target.takeDamage(this.attackPower);
        }
    }
    
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage! Health: ${this.health}/${this.maxHealth}`);
        
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
            console.log(`${this.name} has been defeated!`);
        }
    }
    
    heal(amount) {
        if (this.isAlive) {
            this.health = Math.min(this.health + amount, this.maxHealth);
            console.log(`${this.name} heals ${amount} HP! Health: ${this.health}/${this.maxHealth}`);
        }
    }
    
    levelUp() {
        this.level++;
        this.maxHealth += 10;
        this.health = this.maxHealth;
        this.attackPower += 2;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, 150, 15);
        this.armor = 10;
    }
    
    takeDamage(damage) {
        const reducedDamage = Math.max(damage - this.armor, 0);
        console.log(`Armor reduces damage by ${this.armor}`);
        super.takeDamage(reducedDamage);
    }
    
    rage() {
        console.log(`${this.name} enters rage mode!`);
        const originalAttack = this.attackPower;
        this.attackPower *= 2;
        console.log(`Attack power doubled from ${originalAttack} to ${this.attackPower}!`);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, 80, 25);
        this.mana = 100;
        this.maxMana = 100;
    }
    
    castSpell(target) {
        if (this.mana >= 20) {
            this.mana -= 20;
            console.log(`${this.name} casts a spell! (Mana: ${this.mana}/${this.maxMana})`);
            target.takeDamage(this.attackPower * 2);
        } else {
            console.log(`${this.name} doesn't have enough mana!`);
            this.attack(target);
        }
    }
    
    meditate() {
        this.mana = this.maxMana;
        console.log(`${this.name} meditates and restores all mana!`);
    }
}

console.log('\n--- Game Battle Example ---');
const warrior = new Warrior('Conan the Barbarian');
const mage = new Mage('Gandalf the Grey');

console.log('\n--- Battle Begins! ---');
warrior.attack(mage);
mage.castSpell(warrior);
warrior.rage();
warrior.attack(mage);
mage.heal(20);
mage.meditate();
mage.castSpell(warrior);

console.log('\n--- Final Status ---');
console.log(`${warrior.name}: ${warrior.health}/${warrior.maxHealth} HP`);
console.log(`${mage.name}: ${mage.health}/${mage.maxHealth} HP`);
