// Day 07 - Objects - Solutions

// ========================================
// LEVEL 1
// ========================================

// 1. Create an empty object called dog
const dog = {};
console.log('1. Empty dog object:', dog);

// 2. Print the dog object on the console
console.log('\n2. Dog object:', dog);

// 3. Add properties and bark method
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'brown';
dog.age = 3;
dog.bark = function() {
    return 'woof woof';
};
console.log('\n3. Dog with properties:', dog);

// 4. Get values
console.log('\n4. Dog properties:');
console.log('Name:', dog.name);
console.log('Legs:', dog.legs);
console.log('Color:', dog.color);
console.log('Age:', dog.age);
console.log('Bark:', dog.bark());

// 5. Set new properties
dog.breed = 'Golden Retriever';
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}`;
};
console.log('\n5. Dog info:', dog.getDogInfo());

// 6. Create person object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
    city: 'New York',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    isMarried: false,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log('\n6. Person full name:', person.getFullName());
console.log('Person object:', person);

// 7. Create personAccount object
const personAccount = {
    firstName: 'Alice',
    lastName: 'Smith',
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1200 },
        { description: 'Food', amount: 500 },
        { description: 'Utilities', amount: 200 }
    ],
    
    totalIncome() {
        return this.incomes.reduce((sum, income) => sum + income.amount, 0);
    },
    
    totalExpense() {
        return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    },
    
    accountInfo() {
        return `Account: ${this.firstName} ${this.lastName}\n` +
               `Total Income: $${this.totalIncome()}\n` +
               `Total Expense: $${this.totalExpense()}\n` +
               `Balance: $${this.accountBalance()}`;
    },
    
    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },
    
    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },
    
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

console.log('\n7. Person Account:');
console.log(personAccount.accountInfo());
personAccount.addIncome('Bonus', 1000);
console.log('\nAfter adding bonus:');
console.log(personAccount.accountInfo());

// ========================================
// LEVEL 2
// ========================================

// Sample users object for Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

// 1. Person with most skills
console.log('\n\nLEVEL 2\n');
console.log('1. Person with most skills:');
let maxSkills = 0;
let personWithMostSkills = '';

for (const [name, data] of Object.entries(users)) {
    if (data.skills.length > maxSkills) {
        maxSkills = data.skills.length;
        personWithMostSkills = name;
    }
}
console.log(`${personWithMostSkills} with ${maxSkills} skills`);

// 2. Count logged in users
console.log('\n2. Logged in users:');
let loggedInCount = 0;
for (const user of Object.values(users)) {
    if (user.isLoggedIn) loggedInCount++;
}
console.log(`${loggedInCount} users are logged in`);

// 3. Users with >= 50 points
console.log('\n3. Users with >= 50 points:');
let highPointUsers = 0;
for (const user of Object.values(users)) {
    if (user.points >= 50) highPointUsers++;
}
console.log(`${highPointUsers} users have >= 50 points`);

// 4. MERN stack developers
console.log('\n4. MERN stack developers:');
const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
const mernDevs = [];

for (const [name, data] of Object.entries(users)) {
    const hasAllSkills = mernSkills.every(skill => 
        data.skills.some(s => s.includes(skill))
    );
    if (hasAllSkills) {
        mernDevs.push(name);
    }
}
console.log('MERN developers:', mernDevs.join(', '));

// 5. Set your name without modifying original
console.log('\n5. Add new user:');
const updatedUsers = { ...users };
updatedUsers.MyName = {
    email: 'myname@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    age: 25,
    isLoggedIn: true,
    points: 45
};
console.log('Added new user. Total users:', Object.keys(updatedUsers).length);

// 6. Get all keys
console.log('\n6. All user names (keys):', Object.keys(users).join(', '));

// 7. Get all values
console.log('\n7. All user data (values):');
console.log('Number of users:', Object.values(users).length);

// 8. Check if property exists
console.log('\n8. Property checks:');
console.log('Does Alex have email?', users.Alex.hasOwnProperty('email'));
console.log('Does Alex have country?', users.Alex.hasOwnProperty('country'));

// ========================================
// LEVEL 3
// ========================================

console.log('\n\nLEVEL 3\n');

// 1. Advanced personAccount with Sets
const advancedPersonAccount = {
    firstName: 'Emma',
    lastName: 'Wilson',
    incomes: new Set(),
    expenses: new Set(),
    
    totalIncome() {
        let total = 0;
        for (const income of this.incomes) {
            total += income.amount;
        }
        return total;
    },
    
    totalExpense() {
        let total = 0;
        for (const expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },
    
    accountInfo() {
        return `Account holder: ${this.firstName} ${this.lastName}\n` +
               `Total Income: $${this.totalIncome()}\n` +
               `Total Expenses: $${this.totalExpense()}\n` +
               `Balance: $${this.accountBalance()}`;
    },
    
    addIncome(description, amount) {
        this.incomes.add({ description, amount, date: new Date() });
    },
    
    addExpense(description, amount) {
        this.expenses.add({ description, amount, date: new Date() });
    },
    
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

console.log('1. Advanced Person Account:');
advancedPersonAccount.addIncome('Salary', 6000);
advancedPersonAccount.addIncome('Investment', 500);
advancedPersonAccount.addExpense('Rent', 1500);
advancedPersonAccount.addExpense('Food', 600);
console.log(advancedPersonAccount.accountInfo());

// 2. Library system
const library = {
    books: [],
    
    addBook(title, author, year) {
        this.books.push({ title, author, year, isAvailable: true });
        return `Added: ${title}`;
    },
    
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            return `Removed: ${title}`;
        }
        return 'Book not found';
    },
    
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    },
    
    listAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    },
    
    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            return `Borrowed: ${title}`;
        }
        return 'Book not available';
    },
    
    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.isAvailable = true;
            return `Returned: ${title}`;
        }
        return 'Book not found';
    }
};

console.log('\n2. Library System:');
console.log(library.addBook('1984', 'George Orwell', 1949));
console.log(library.addBook('To Kill a Mockingbird', 'Harper Lee', 1960));
console.log(library.addBook('Animal Farm', 'George Orwell', 1945));
console.log('\nAvailable books:', library.listAvailableBooks().length);
console.log(library.borrowBook('1984'));
console.log('Available books:', library.listAvailableBooks().length);
console.log(library.returnBook('1984'));
console.log('Orwell books:', library.findBooksByAuthor('George Orwell').length);

// 3. Student registry
const studentRegistry = {
    students: [],
    
    addStudent(name, age, grades) {
        this.students.push({ name, age, grades });
        return `Added student: ${name}`;
    },
    
    removeStudent(name) {
        const index = this.students.findIndex(s => s.name === name);
        if (index !== -1) {
            this.students.splice(index, 1);
            return `Removed: ${name}`;
        }
        return 'Student not found';
    },
    
    updateGrades(name, subject, grade) {
        const student = this.students.find(s => s.name === name);
        if (student) {
            student.grades[subject] = grade;
            return `Updated ${name}'s ${subject} grade`;
        }
        return 'Student not found';
    },
    
    calculateAverage(name) {
        const student = this.students.find(s => s.name === name);
        if (student) {
            const grades = Object.values(student.grades);
            const sum = grades.reduce((a, b) => a + b, 0);
            return sum / grades.length;
        }
        return 0;
    },
    
    getTopStudents() {
        return this.students.filter(student => {
            return this.calculateAverage(student.name) > 90;
        });
    },
    
    listAllStudents() {
        return this.students.map(s => 
            `${s.name} (${s.age}) - Avg: ${this.calculateAverage(s.name).toFixed(2)}`
        );
    }
};

console.log('\n3. Student Registry:');
console.log(studentRegistry.addStudent('Alice', 20, { math: 95, science: 92, english: 88 }));
console.log(studentRegistry.addStudent('Bob', 21, { math: 85, science: 88, english: 90 }));
console.log(studentRegistry.addStudent('Charlie', 19, { math: 92, science: 95, english: 93 }));
console.log('\nAll students:');
studentRegistry.listAllStudents().forEach(s => console.log(s));
console.log('\nTop students (avg > 90):');
studentRegistry.getTopStudents().forEach(s => console.log(s.name));
