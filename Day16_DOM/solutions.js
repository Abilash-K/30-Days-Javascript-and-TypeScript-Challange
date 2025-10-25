// Day 16 - DOM Manipulation - Solutions

console.log('=== LEVEL 1 SOLUTIONS ===\n');

// 1. Create a div element and set its id to 'container'
const container = document.createElement('div');
container.id = 'container';
console.log('1. Container div created with id:', container.id);

// 2. Create a paragraph element and set its text content
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello DOM!';
console.log('2. Paragraph created:', paragraph.textContent);

// 3. Create an h1 element and add the class 'title'
const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'My Title';
console.log('3. Heading created with class:', heading.className);

// 4. Create an unordered list with 3 list items
const ul = document.createElement('ul');
const items = ['Item 1', 'Item 2', 'Item 3'];
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
console.log('4. List created with', ul.children.length, 'items');

// 5. Create a link element
const link = document.createElement('a');
link.href = 'https://example.com';
link.textContent = 'Click me';
link.target = '_blank';
console.log('5. Link created:', link.href);

console.log('\n=== LEVEL 2 SOLUTIONS ===\n');

// 1. Function that generates a card
function createCard(title, description, buttonText = 'Learn More') {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    cardTitle.classList.add('card-title');
    
    const cardDesc = document.createElement('p');
    cardDesc.textContent = description;
    cardDesc.classList.add('card-description');
    
    const cardBtn = document.createElement('button');
    cardBtn.textContent = buttonText;
    cardBtn.classList.add('btn', 'btn-primary');
    
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(cardBtn);
    
    return card;
}

const card1 = createCard('JavaScript', 'Learn modern JavaScript', 'Start Learning');
console.log('1. Card created:', card1.querySelector('.card-title').textContent);

// 2. Function that generates a list from array
function createListFromArray(items, ordered = false) {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    list.classList.add('dynamic-list');
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    
    return list;
}

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
const fruitList = createListFromArray(fruits);
console.log('2. List created with', fruitList.children.length, 'items');

// 3. Create a table with data
function createTable(headers, rows) {
    const table = document.createElement('table');
    table.classList.add('data-table');
    
    // Create thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create tbody
    const tbody = document.createElement('tbody');
    rows.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    
    return table;
}

const tableHeaders = ['Name', 'Age', 'City'];
const tableData = [
    ['Alice', '25', 'New York'],
    ['Bob', '30', 'San Francisco'],
    ['Charlie', '35', 'Chicago']
];
const dataTable = createTable(tableHeaders, tableData);
console.log('3. Table created with', dataTable.querySelectorAll('tr').length, 'rows');

// 4. Create a form
function createForm(fields) {
    const form = document.createElement('form');
    form.classList.add('contact-form');
    
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        
        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.name);
        
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type || 'text';
        }
        input.name = field.name;
        input.id = field.name;
        input.placeholder = field.placeholder || '';
        input.required = field.required || false;
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    submitBtn.classList.add('btn', 'btn-submit');
    form.appendChild(submitBtn);
    
    return form;
}

const formFields = [
    { label: 'Name', name: 'name', type: 'text', required: true },
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Message', name: 'message', type: 'textarea' }
];
const contactForm = createForm(formFields);
console.log('4. Form created with', contactForm.querySelectorAll('.form-group').length, 'fields');

// 5. Build navigation menu
function createNavMenu(items) {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        a.classList.add('nav-link');
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    return nav;
}

const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
];
const navbar = createNavMenu(menuItems);
console.log('5. Navigation menu created with', navbar.querySelectorAll('.nav-item').length, 'items');

console.log('\n=== LEVEL 3 SOLUTIONS ===\n');

// 1. Photo gallery grid
function createPhotoGallery(imageUrls) {
    const gallery = document.createElement('div');
    gallery.classList.add('photo-gallery');
    
    imageUrls.forEach((url, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Gallery image ${index + 1}`;
        img.classList.add('gallery-image');
        
        const overlay = document.createElement('div');
        overlay.classList.add('gallery-overlay');
        
        const caption = document.createElement('span');
        caption.textContent = `Photo ${index + 1}`;
        caption.classList.add('gallery-caption');
        
        overlay.appendChild(caption);
        item.appendChild(img);
        item.appendChild(overlay);
        gallery.appendChild(item);
    });
    
    return gallery;
}

const images = [
    'photo1.jpg', 'photo2.jpg', 'photo3.jpg',
    'photo4.jpg', 'photo5.jpg', 'photo6.jpg'
];
const photoGallery = createPhotoGallery(images);
console.log('1. Photo gallery created with', photoGallery.children.length, 'images');

// 2. Dynamic tree structure
function createTreeNode(data) {
    const li = document.createElement('li');
    li.classList.add('tree-node');
    
    const span = document.createElement('span');
    span.textContent = data.name;
    span.classList.add('tree-label');
    li.appendChild(span);
    
    if (data.children && data.children.length > 0) {
        const ul = document.createElement('ul');
        ul.classList.add('tree-children');
        
        data.children.forEach(child => {
            const childNode = createTreeNode(child);
            ul.appendChild(childNode);
        });
        
        li.appendChild(ul);
    }
    
    return li;
}

function createTree(data) {
    const tree = document.createElement('ul');
    tree.classList.add('tree-root');
    
    const rootNode = createTreeNode(data);
    tree.appendChild(rootNode);
    
    return tree;
}

const treeData = {
    name: 'Root',
    children: [
        {
            name: 'Child 1',
            children: [
                { name: 'Grandchild 1.1' },
                { name: 'Grandchild 1.2' }
            ]
        },
        {
            name: 'Child 2',
            children: [
                { name: 'Grandchild 2.1' }
            ]
        }
    ]
};
const tree = createTree(treeData);
console.log('2. Tree structure created');

// 3. Dashboard with multiple cards
function createDashboard(cards) {
    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard');
    
    cards.forEach(cardData => {
        const card = document.createElement('div');
        card.classList.add('dashboard-card');
        
        const icon = document.createElement('div');
        icon.classList.add('card-icon');
        icon.textContent = cardData.icon;
        
        const value = document.createElement('div');
        value.classList.add('card-value');
        value.textContent = cardData.value;
        
        const label = document.createElement('div');
        label.classList.add('card-label');
        label.textContent = cardData.label;
        
        card.appendChild(icon);
        card.appendChild(value);
        card.appendChild(label);
        dashboard.appendChild(card);
    });
    
    return dashboard;
}

const dashboardData = [
    { icon: '👥', value: '1,234', label: 'Users' },
    { icon: '💰', value: '$12,345', label: 'Revenue' },
    { icon: '📊', value: '89%', label: 'Growth' },
    { icon: '⭐', value: '4.8', label: 'Rating' }
];
const dashboard = createDashboard(dashboardData);
console.log('3. Dashboard created with', dashboard.children.length, 'cards');

// 4. Reusable component system
const ComponentFactory = {
    create(type, config) {
        const components = {
            button: this.createButton,
            card: this.createCard,
            list: this.createList,
            input: this.createInput
        };
        
        return components[type] ? components[type](config) : null;
    },
    
    createButton(config) {
        const btn = document.createElement('button');
        btn.textContent = config.text || 'Button';
        btn.className = config.className || 'btn';
        if (config.onClick) btn.addEventListener('click', config.onClick);
        return btn;
    },
    
    createCard(config) {
        return createCard(config.title, config.description, config.buttonText);
    },
    
    createList(config) {
        return createListFromArray(config.items, config.ordered);
    },
    
    createInput(config) {
        const input = document.createElement('input');
        input.type = config.type || 'text';
        input.placeholder = config.placeholder || '';
        input.name = config.name || '';
        input.className = config.className || 'input';
        return input;
    }
};

const myButton = ComponentFactory.create('button', {
    text: 'Click Me',
    className: 'btn btn-primary'
});
console.log('4. Component factory created button:', myButton.textContent);

// 5. Complete blog post component
function createBlogPost(post) {
    const article = document.createElement('article');
    article.classList.add('blog-post');
    
    // Featured image
    if (post.image) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('post-image');
        
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.title;
        
        imgContainer.appendChild(img);
        article.appendChild(imgContainer);
    }
    
    // Post header
    const header = document.createElement('header');
    header.classList.add('post-header');
    
    const title = document.createElement('h2');
    title.textContent = post.title;
    title.classList.add('post-title');
    
    const meta = document.createElement('div');
    meta.classList.add('post-meta');
    
    const author = document.createElement('span');
    author.textContent = `By ${post.author}`;
    author.classList.add('post-author');
    
    const date = document.createElement('span');
    date.textContent = post.date;
    date.classList.add('post-date');
    
    meta.appendChild(author);
    meta.appendChild(document.createTextNode(' • '));
    meta.appendChild(date);
    
    header.appendChild(title);
    header.appendChild(meta);
    article.appendChild(header);
    
    // Post content
    const content = document.createElement('div');
    content.classList.add('post-content');
    
    const excerpt = document.createElement('p');
    excerpt.textContent = post.excerpt;
    excerpt.classList.add('post-excerpt');
    
    content.appendChild(excerpt);
    article.appendChild(content);
    
    // Tags
    if (post.tags && post.tags.length > 0) {
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('post-tags');
        
        post.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tag;
            tagSpan.classList.add('tag');
            tagsContainer.appendChild(tagSpan);
        });
        
        article.appendChild(tagsContainer);
    }
    
    // Read more button
    const footer = document.createElement('footer');
    footer.classList.add('post-footer');
    
    const readMoreBtn = document.createElement('a');
    readMoreBtn.href = post.url || '#';
    readMoreBtn.textContent = 'Read More →';
    readMoreBtn.classList.add('btn', 'btn-link');
    
    footer.appendChild(readMoreBtn);
    article.appendChild(footer);
    
    return article;
}

const blogPost = createBlogPost({
    title: 'Getting Started with JavaScript',
    author: 'Jane Doe',
    date: 'October 25, 2025',
    excerpt: 'Learn the basics of JavaScript and start your web development journey...',
    image: 'blog-post-image.jpg',
    tags: ['JavaScript', 'Tutorial', 'Beginner'],
    url: '/blog/getting-started-with-javascript'
});

console.log('5. Blog post component created:', blogPost.querySelector('.post-title').textContent);

console.log('\n=== All Solutions Complete! ===');

