// Day 03 - Booleans, Operators, and Conditionals - Examples

console.log('=== BOOLEANS ===\n');

// Boolean values
let isJavaScriptFun = true;
let isRaining = false;

console.log('Is JavaScript fun?', isJavaScriptFun);
console.log('Is it raining?', isRaining);

// Truthy and Falsy values
console.log('\n--- Truthy and Falsy Values ---');
console.log('Boolean(0):', Boolean(0));           // false
console.log('Boolean(""):', Boolean(""));         // false
console.log('Boolean(null):', Boolean(null));     // false
console.log('Boolean(undefined):', Boolean(undefined)); // false
console.log('Boolean(NaN):', Boolean(NaN));       // false
console.log('Boolean(1):', Boolean(1));           // true
console.log('Boolean("hello"):', Boolean("hello")); // true
console.log('Boolean([]):', Boolean([]));         // true
console.log('Boolean({}):', Boolean({}));         // true

// ========================================
console.log('\n=== COMPARISON OPERATORS ===\n');

let a = 5;
let b = 10;
let c = '5';

// Equality operators
console.log('--- Equality ---');
console.log('a == c:', a == c);    // true (loose equality, type coercion)
console.log('a === c:', a === c);  // false (strict equality, no type coercion)
console.log('a != c:', a != c);    // false
console.log('a !== c:', a !== c);  // true

// Comparison operators
console.log('\n--- Comparison ---');
console.log('a > b:', a > b);      // false
console.log('a < b:', a < b);      // true
console.log('a >= 5:', a >= 5);    // true
console.log('b <= 10:', b <= 10);  // true

// ========================================
console.log('\n=== LOGICAL OPERATORS ===\n');

let age = 25;
let hasLicense = true;

// AND operator (&&)
console.log('--- AND (&&) ---');
console.log('age >= 18 && hasLicense:', age >= 18 && hasLicense); // true
console.log('age >= 30 && hasLicense:', age >= 30 && hasLicense); // false

// OR operator (||)
console.log('\n--- OR (||) ---');
console.log('age < 18 || !hasLicense:', age < 18 || !hasLicense); // false
console.log('age > 18 || !hasLicense:', age > 18 || !hasLicense); // true

// NOT operator (!)
console.log('\n--- NOT (!) ---');
console.log('!hasLicense:', !hasLicense);         // false
console.log('!(age < 18):', !(age < 18));         // true

// ========================================
console.log('\n=== ARITHMETIC OPERATORS ===\n');

let x = 10;
let y = 3;

console.log('Addition: x + y =', x + y);           // 13
console.log('Subtraction: x - y =', x - y);        // 7
console.log('Multiplication: x * y =', x * y);     // 30
console.log('Division: x / y =', x / y);           // 3.333...
console.log('Modulus: x % y =', x % y);            // 1
console.log('Exponentiation: x ** y =', x ** y);   // 1000

// Increment and Decrement
console.log('\n--- Increment/Decrement ---');
let count = 5;
console.log('count:', count);
console.log('count++:', count++);  // 5 (post-increment)
console.log('count:', count);      // 6
console.log('++count:', ++count);  // 7 (pre-increment)
console.log('count:', count);      // 7

// ========================================
console.log('\n=== ASSIGNMENT OPERATORS ===\n');

let num = 10;
console.log('Initial num:', num);

num += 5;   // num = num + 5
console.log('After num += 5:', num);   // 15

num -= 3;   // num = num - 3
console.log('After num -= 3:', num);   // 12

num *= 2;   // num = num * 2
console.log('After num *= 2:', num);   // 24

num /= 4;   // num = num / 4
console.log('After num /= 4:', num);   // 6

num %= 4;   // num = num % 4
console.log('After num %= 4:', num);   // 2

// ========================================
console.log('\n=== IF STATEMENTS ===\n');

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("The weather is nice.");
} else if (temperature > 10) {
    console.log("It's a bit chilly.");
} else {
    console.log("It's cold outside!");
}

// ========================================
console.log('\n=== TERNARY OPERATOR ===\n');

let score = 85;
let result = score >= 60 ? 'Pass' : 'Fail';
console.log('Score:', score, '- Result:', result);

// Nested ternary
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log('Grade:', grade);

// ========================================
console.log('\n=== SWITCH STATEMENT ===\n');

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log('Day', day, 'is', dayName);

// Switch with multiple cases
let fruit = 'apple';
switch (fruit) {
    case 'apple':
    case 'pear':
        console.log('This fruit is green or red');
        break;
    case 'banana':
    case 'mango':
        console.log('This fruit is yellow');
        break;
    default:
        console.log('Unknown fruit');
}

// ========================================
console.log('\n=== PRACTICAL EXAMPLES ===\n');

// Example 1: Login validation
function validateLogin(username, password) {
    if (!username || !password) {
        return 'Please provide both username and password';
    }
    
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    
    return 'Login successful!';
}

console.log('--- Login Validation ---');
console.log(validateLogin('', '123456'));        // Error message
console.log(validateLogin('ab', '123456'));      // Error message
console.log(validateLogin('john', '12345'));     // Error message
console.log(validateLogin('john', '123456'));    // Success

// Example 2: Age category
function getAgeCategory(age) {
    if (age < 0) {
        return 'Invalid age';
    } else if (age < 13) {
        return 'Child';
    } else if (age < 20) {
        return 'Teenager';
    } else if (age < 60) {
        return 'Adult';
    } else {
        return 'Senior';
    }
}

console.log('\n--- Age Categories ---');
console.log('Age 5:', getAgeCategory(5));
console.log('Age 15:', getAgeCategory(15));
console.log('Age 30:', getAgeCategory(30));
console.log('Age 65:', getAgeCategory(65));

// Example 3: Grade calculator
function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return 'Invalid score';
    }
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log('\n--- Grade Calculator ---');
console.log('Score 95:', calculateGrade(95));
console.log('Score 85:', calculateGrade(85));
console.log('Score 75:', calculateGrade(75));
console.log('Score 55:', calculateGrade(55));

// Example 4: Check leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log('\n--- Leap Year Checker ---');
console.log('2024:', isLeapYear(2024));  // true
console.log('2023:', isLeapYear(2023));  // false
console.log('2000:', isLeapYear(2000));  // true
console.log('1900:', isLeapYear(1900));  // false

// Example 5: Find max of three numbers
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log('\n--- Find Maximum ---');
console.log('Max of 5, 10, 3:', findMax(5, 10, 3));
console.log('Max of 15, 10, 20:', findMax(15, 10, 20));
