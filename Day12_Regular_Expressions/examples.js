// Day 12 - Regular Expressions - Examples

console.log('=== BASIC REGEX ===');
const pattern = /javascript/i;
console.log('Test:', pattern.test('JavaScript'));

console.log('\n=== MATCH ===');
const text = 'The year is 2024';
const numbers = text.match(/\d+/g);
console.log('Numbers found:', numbers);

console.log('\n=== REPLACE ===');
const sentence = 'Hello world';
const replaced = sentence.replace(/world/, 'there');
console.log('Replaced:', replaced);

console.log('\n=== COMMON PATTERNS ===');
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log('Valid email:', email.test('user@example.com'));
console.log('Invalid email:', email.test('invalid.email'));

const phone = /^\d{3}-\d{3}-\d{4}$/;
console.log('Valid phone:', phone.test('123-456-7890'));
