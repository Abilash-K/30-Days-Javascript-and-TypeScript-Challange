// Day 12 - Regular Expressions - Solutions

console.log('=== LEVEL 1 ===\n');

// 1. Test for JavaScript
const hasJS = /javascript/i.test('I love JavaScript');
console.log('1. Has JavaScript:', hasJS);

// 2. Extract numbers
const numbers = '2024 year has 365 days'.match(/\d+/g);
console.log('2. Numbers:', numbers);

// 3. Replace spaces
const replaced = 'hello world'.replace(/\s/g, '-');
console.log('3. Replaced:', replaced);

// 4. All digits
const isDigits = /^\d+$/.test('12345');
console.log('4. All digits:', isDigits);

// 5. Find words
const words = 'Hello, world!'.match(/\w+/g);
console.log('5. Words:', words);

console.log('\n=== LEVEL 2 ===\n');

// 1. Email validation
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log('1. Valid email:', email.test('user@example.com'));

// 2. Phone validation
const phone = /^\d{3}-\d{3}-\d{4}$/;
console.log('2. Valid phone:', phone.test('123-456-7890'));

// 3. Extract domain
const url = 'https://www.example.com/path';
const domain = url.match(/https?:\/\/([^\/]+)/);
console.log('3. Domain:', domain ? domain[1] : null);

console.log('\n=== LEVEL 3 ===\n');

// Extract hashtags
function extractHashtags(text) {
    return text.match(/#\w+/g) || [];
}
console.log('1. Hashtags:', extractHashtags('I love #JavaScript and #coding'));

// Password strength
function checkPassword(pwd) {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    const isLongEnough = pwd.length >= 8;
    
    return hasUpper && hasLower && hasDigit && hasSpecial && isLongEnough;
}
console.log('2. Strong password:', checkPassword('Pass123!'));
