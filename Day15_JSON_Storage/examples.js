// Day 15 - JSON and Storage - Examples

console.log('=== JSON ===');
const obj = { name: 'John', age: 30, hobbies: ['reading', 'coding'] };
const jsonString = JSON.stringify(obj);
console.log('JSON string:', jsonString);

const parsed = JSON.parse(jsonString);
console.log('Parsed object:', parsed);

console.log('\n=== LocalStorage ===');
// Save data
localStorage.setItem('name', 'John');
localStorage.setItem('user', JSON.stringify({ name: 'Jane', age: 25 }));

// Retrieve data
console.log('Name:', localStorage.getItem('name'));
const user = JSON.parse(localStorage.getItem('user'));
console.log('User:', user);

console.log('\n=== Shopping Cart Example ===');
const ShoppingCart = {
    items: [],
    
    addItem(product) {
        this.items.push(product);
        this.save();
    },
    
    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    load() {
        const data = localStorage.getItem('cart');
        this.items = data ? JSON.parse(data) : [];
    },
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
};

ShoppingCart.load();
ShoppingCart.addItem({ id: 1, name: 'Book', price: 19.99 });
ShoppingCart.addItem({ id: 2, name: 'Pen', price: 4.99 });
console.log('Cart items:', ShoppingCart.items);
console.log('Total:', ShoppingCart.getTotal());
