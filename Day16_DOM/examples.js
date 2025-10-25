// Day 16 - DOM Manipulation - Examples
console.log('=== Day 16: DOM Manipulation Examples ===\n');

// Note: These examples show the JavaScript code.
// To run them in a browser, you'll need an HTML file.

console.log('=== 1. SELECTING ELEMENTS ===\n');

// querySelector - Returns first match
console.log('querySelector examples:');
console.log('const header = document.querySelector(".header");');
console.log('const title = document.querySelector("#title");');
console.log('const firstPara = document.querySelector("p");');

// querySelectorAll - Returns all matches
console.log('\nquerySelectorAll examples:');
console.log('const allParagraphs = document.querySelectorAll("p");');
console.log('const buttons = document.querySelectorAll(".btn");');

// Classic methods
console.log('\nClassic selection methods:');
console.log('const element = document.getElementById("myId");');
console.log('const items = document.getElementsByClassName("item");');
console.log('const paras = document.getElementsByTagName("p");');

console.log('\n=== 2. CREATING ELEMENTS ===\n');

// createElement
console.log('Creating elements:');
const div = document.createElement('div');
const paragraph = document.createElement('p');
const button = document.createElement('button');

console.log('Created div:', div.tagName);
console.log('Created paragraph:', paragraph.tagName);
console.log('Created button:', button.tagName);

// Setting content
paragraph.textContent = 'Hello World!';
paragraph.innerHTML = '<strong>Hello</strong> World!';
console.log('\nParagraph content set');

console.log('\n=== 3. MODIFYING CONTENT ===\n');

// Create example element
const contentDiv = document.createElement('div');

// textContent - Safe, escapes HTML
contentDiv.textContent = '<script>alert("XSS")</script>';
console.log('textContent (safe):', contentDiv.textContent);

// innerHTML - Can parse HTML (use with caution)
contentDiv.innerHTML = '<span>Parsed HTML</span>';
console.log('innerHTML (parses HTML):', contentDiv.innerHTML);

console.log('\n=== 4. WORKING WITH ATTRIBUTES ===\n');

// Create a link element
const link = document.createElement('a');

// Set attributes
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.textContent = 'Example Link';

console.log('Link href:', link.getAttribute('href'));
console.log('Link target:', link.getAttribute('target'));

// Check attribute
console.log('Has href:', link.hasAttribute('href'));

// Data attributes
const dataDiv = document.createElement('div');
dataDiv.dataset.userId = '123';
dataDiv.dataset.role = 'admin';
console.log('\nData attributes:');
console.log('userId:', dataDiv.dataset.userId);
console.log('role:', dataDiv.dataset.role);

console.log('\n=== 5. CSS MANIPULATION ===\n');

// Inline styles
const styledDiv = document.createElement('div');
styledDiv.style.color = 'blue';
styledDiv.style.backgroundColor = 'yellow';
styledDiv.style.padding = '10px';
console.log('Inline styles applied');

// CSS Classes
const classDiv = document.createElement('div');
classDiv.classList.add('active');
classDiv.classList.add('highlight', 'selected');
console.log('Classes:', Array.from(classDiv.classList).join(', '));

classDiv.classList.remove('highlight');
console.log('After remove:', Array.from(classDiv.classList).join(', '));

classDiv.classList.toggle('active');
console.log('After toggle:', Array.from(classDiv.classList).join(', '));

console.log('Contains "selected":', classDiv.classList.contains('selected'));

console.log('\n=== 6. PRACTICAL EXAMPLES ===\n');

// Example 1: Create a list
console.log('Example 1: Creating a todo list');
const todoList = document.createElement('ul');
const todos = ['Learn JavaScript', 'Build project', 'Practice daily'];

todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.classList.add('todo-item');
    todoList.appendChild(li);
});
console.log('Todo list created with', todoList.children.length, 'items');

// Example 2: Create a card
console.log('\nExample 2: Creating a card component');
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    
    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    
    const cardButton = document.createElement('button');
    cardButton.textContent = 'Learn More';
    cardButton.classList.add('btn', 'btn-primary');
    
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    card.appendChild(cardButton);
    
    return card;
}

const myCard = createCard('JavaScript Basics', 'Learn the fundamentals of JavaScript');
console.log('Card created:', myCard.querySelector('h3').textContent);

// Example 3: Table generator
console.log('\nExample 3: Creating a data table');
function createTable(data) {
    const table = document.createElement('table');
    table.classList.add('data-table');
    
    // Create header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key.toUpperCase();
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    
    return table;
}

const tableData = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

const dataTable = createTable(tableData);
console.log('Table created with', dataTable.querySelectorAll('tr').length, 'rows');

// Example 4: Document Fragment for performance
console.log('\nExample 4: Using Document Fragment');
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
console.log('Fragment with 100 items created (efficient!)');

console.log('\n=== 7. DOM TRAVERSAL ===\n');

// Create a small DOM structure
const container = document.createElement('div');
container.className = 'container';

const header = document.createElement('h2');
header.textContent = 'Header';

const content = document.createElement('div');
content.className = 'content';

const p1 = document.createElement('p');
p1.textContent = 'Paragraph 1';

const p2 = document.createElement('p');
p2.textContent = 'Paragraph 2';

content.appendChild(p1);
content.appendChild(p2);
container.appendChild(header);
container.appendChild(content);

// Traversal examples
console.log('Parent of p1:', p1.parentElement.className);
console.log('First child of content:', content.firstElementChild.textContent);
console.log('Last child of content:', content.lastElementChild.textContent);
console.log('Next sibling of p1:', p1.nextElementSibling.textContent);
console.log('Children count:', content.childElementCount);

console.log('\n=== BEST PRACTICES ===\n');
console.log('1. Cache DOM queries for better performance');
console.log('2. Use Document Fragments for bulk operations');
console.log('3. Prefer textContent over innerHTML for text');
console.log('4. Use classList over className manipulation');
console.log('5. Always validate elements before manipulation');

console.log('\n=== DOM Examples Complete! ===');
