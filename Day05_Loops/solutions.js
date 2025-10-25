// Day 05 - Loops - Solutions

// ========================================
// LEVEL 1
// ========================================

// 1. Iterate 0 to 10 using for loop, while loop and do...while loop
console.log('--- For Loop 0 to 10 ---');
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('\n--- While Loop 0 to 10 ---');
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log('\n--- Do...While Loop 0 to 10 ---');
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. Iterate 10 to 0 using for loop, while loop and do...while loop
console.log('\n--- For Loop 10 to 0 ---');
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log('\n--- While Loop 10 to 0 ---');
i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

console.log('\n--- Do...While Loop 10 to 0 ---');
i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

// 3. Triangle pattern
console.log('\n--- Triangle Pattern ---');
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

// 4. Squares pattern
console.log('\n--- Squares Pattern ---');
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 5. Print only even numbers from 0 to 100
console.log('\n--- Even Numbers 0 to 100 ---');
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// 6. Print only odd numbers from 0 to 100
console.log('\n--- Odd Numbers 0 to 100 ---');
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// 7. Sum of all numbers from 0 to 100
console.log('\n--- Sum 0 to 100 ---');
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// 8. Sum of evens and odds
console.log('\n--- Sum of Evens and Odds ---');
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

// ========================================
// LEVEL 2
// ========================================

// 1. Grade calculator
console.log('\n--- Grade Calculator ---');
function getGrade(score) {
    if (score >= 80 && score <= 100) return 'A';
    if (score >= 70 && score < 80) return 'B';
    if (score >= 60 && score < 70) return 'C';
    if (score >= 50 && score < 60) return 'D';
    if (score >= 0 && score < 50) return 'F';
    return 'Invalid score';
}

const scores = [95, 75, 65, 55, 45];
for (const score of scores) {
    console.log(`Score ${score}: Grade ${getGrade(score)}`);
}

// 2. Season checker
console.log('\n--- Season Checker ---');
function getSeason(month) {
    month = month.toLowerCase();
    if (['september', 'october', 'november'].includes(month)) {
        return 'Autumn';
    } else if (['december', 'january', 'february'].includes(month)) {
        return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
        return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
        return 'Summer';
    }
    return 'Invalid month';
}

const months = ['January', 'April', 'July', 'October'];
for (const month of months) {
    console.log(`${month}: ${getSeason(month)}`);
}

// 3. Days in a month
console.log('\n--- Days in Month ---');
function getDaysInMonth(month, year = 2024) {
    const monthDays = {
        january: 31, february: 28, march: 31, april: 30,
        may: 31, june: 30, july: 31, august: 31,
        september: 30, october: 31, november: 30, december: 31
    };
    
    month = month.toLowerCase();
    let days = monthDays[month];
    
    // Check for leap year if February
    if (month === 'february') {
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        days = isLeap ? 29 : 28;
    }
    
    return days;
}

console.log('February 2024 has', getDaysInMonth('February', 2024), 'days');
console.log('April has', getDaysInMonth('April'), 'days');

// 4. Random hexadecimal color
console.log('\n--- Random Hex Color ---');
function randomHexColor() {
    let color = '#';
    const chars = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 3; i++) {
    console.log(randomHexColor());
}

// 5. Random RGB color
console.log('\n--- Random RGB Color ---');
function randomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 3; i++) {
    console.log(randomRGBColor());
}

// 6. Countries ending with 'land'
console.log('\n--- Countries with "land" ---');
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const landCountries = [];
for (const country of countries) {
    if (country.toLowerCase().endsWith('land')) {
        landCountries.push(country);
    }
}
console.log(landCountries);

// 7. Country lengths
console.log('\n--- Country Lengths ---');
const countryLengths = [];
for (const country of countries) {
    countryLengths.push(country.length);
}
console.log(countryLengths);

// 8. Array of arrays
console.log('\n--- Country Info Arrays ---');
const countryInfo = [];
for (const country of countries) {
    const code = country.substring(0, 3).toUpperCase();
    countryInfo.push([country, code, country.length]);
}
console.log(countryInfo);

// 9. Add 'land' if not present
console.log('\n--- Add "land" if Missing ---');
const allLandCountries = [];
for (const country of countries) {
    if (country.toLowerCase().endsWith('land')) {
        allLandCountries.push(country);
    } else {
        allLandCountries.push(country + 'land');
    }
}
console.log(allLandCountries);

// 10. Break at first number > 100
console.log('\n--- Break at First > 100 ---');
const numbers = [1, 45, 23, 78, 134, 56, 89, 210];
for (const num of numbers) {
    if (num > 100) {
        console.log(`Found ${num}, which is > 100. Breaking...`);
        break;
    }
    console.log(num);
}

// ========================================
// LEVEL 3
// ========================================

// 1. Random 6-digit number
console.log('\n--- Random 6-Digit Number ---');
function random6Digit() {
    return Math.floor(100000 + Math.random() * 900000);
}
console.log(random6Digit());
console.log(random6Digit());

// 2. Random 6-character hexadecimal
console.log('\n--- Random 6-Character Hex ---');
function random6Hex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
console.log(random6Hex());
console.log(random6Hex());

// 3. Random RGB (already done in Level 2 #5)
console.log('\n--- Random RGB ---');
console.log(randomRGBColor());

// 4. Countries in uppercase
console.log('\n--- Uppercase Countries ---');
const allCountries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const upperCountries = [];
for (const country of allCountries) {
    upperCountries.push(country.toUpperCase());
}
console.log(upperCountries);

// 5. Countries with 7 characters
console.log('\n--- 7-Character Countries ---');
const sevenCharCountries = [];
for (const country of allCountries) {
    if (country.length === 7) {
        sevenCharCountries.push(country);
    }
}
console.log(sevenCharCountries);

// 6. Reverse string or array
console.log('\n--- Reverse Function ---');
function reverseIt(input) {
    const result = [];
    for (let i = input.length - 1; i >= 0; i--) {
        result.push(input[i]);
    }
    return typeof input === 'string' ? result.join('') : result;
}
console.log(reverseIt('hello'));       // olleh
console.log(reverseIt([1, 2, 3, 4]));  // [4, 3, 2, 1]

// 7. Sum from 1 to n
console.log('\n--- Sum 1 to n ---');
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log('Sum 1 to 10:', sumToN(10));   // 55
console.log('Sum 1 to 100:', sumToN(100)); // 5050

// 8. Factorial
console.log('\n--- Factorial ---');
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log('5! =', factorial(5));   // 120
console.log('7! =', factorial(7));   // 5040

// 9. Check if all values are unique
console.log('\n--- Check Unique Values ---');
function areAllUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log('[1, 2, 3, 4]:', areAllUnique([1, 2, 3, 4]));     // true
console.log('[1, 2, 2, 4]:', areAllUnique([1, 2, 2, 4]));     // false

// 10. Check if all same type
console.log('\n--- Check Same Type ---');
function areAllSameType(arr) {
    if (arr.length === 0) return true;
    const firstType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
            return false;
        }
    }
    return true;
}
console.log('[1, 2, 3]:', areAllSameType([1, 2, 3]));           // true
console.log('[1, "2", 3]:', areAllSameType([1, "2", 3]));       // false

// 11. Get unique values
console.log('\n--- Unique Values ---');
function getUnique(arr) {
    const unique = [];
    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}
console.log('Original: [1, 2, 2, 3, 4, 4, 5]');
console.log('Unique:', getUnique([1, 2, 2, 3, 4, 4, 5]));

// 12. Count empty values
console.log('\n--- Count Empty Values ---');
function countEmpty(arr) {
    let count = 0;
    for (const item of arr) {
        if (item === null || item === undefined || item === '') {
            count++;
        }
    }
    return count;
}
console.log('[1, "", null, 3, undefined]:', countEmpty([1, "", null, 3, undefined])); // 3

// 13. Average of array
console.log('\n--- Array Average ---');
function average(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log('Average of [10, 20, 30, 40]:', average([10, 20, 30, 40])); // 25

// 14. Create array of n random numbers
console.log('\n--- Random Number Array ---');
function randomArray(n, min = 0, max = 100) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
console.log('5 random numbers:', randomArray(5));

// 15. Create array of n unique random numbers
console.log('\n--- Unique Random Number Array ---');
function uniqueRandomArray(n, min = 0, max = 100) {
    if (n > (max - min + 1)) {
        throw new Error('Cannot generate more unique numbers than range allows');
    }
    const arr = [];
    while (arr.length < n) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}
console.log('5 unique random numbers (0-50):', uniqueRandomArray(5, 0, 50));
