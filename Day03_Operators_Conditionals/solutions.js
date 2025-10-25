// Day 03 - Booleans, Operators, and Conditionals - Solutions

// ========================================
// LEVEL 1
// ========================================

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
// and use the typeof operator to check different data types.
let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 25;
let isMarried = false;
let year = 2024;

console.log('--- Variable Types ---');
console.log('typeof firstName:', typeof firstName);
console.log('typeof lastName:', typeof lastName);
console.log('typeof country:', typeof country);
console.log('typeof city:', typeof city);
console.log('typeof age:', typeof age);
console.log('typeof isMarried:', typeof isMarried);
console.log('typeof year:', typeof year);

// 2. Check if type of '10' is equal to 10
console.log('\n--- Type Comparison ---');
console.log("typeof '10' === typeof 10:", typeof '10' === typeof 10);  // false
console.log("'10' == 10:", '10' == 10);  // true (loose equality with type coercion)
console.log("'10' === 10:", '10' === 10);  // false (strict equality)

// 3. Check if parseInt('9.8') is equal to 10
console.log('\n--- parseInt Comparison ---');
console.log("parseInt('9.8'):", parseInt('9.8'));  // 9
console.log("parseInt('9.8') === 10:", parseInt('9.8') === 10);  // false
console.log("Math.ceil(parseFloat('9.8')) === 10:", Math.ceil(parseFloat('9.8')) === 10);  // true

// 4. Boolean value is either true or false.
//    a. Write three JavaScript statements which provide truthy value.
console.log('\n--- Truthy Values ---');
console.log('Boolean(1):', Boolean(1));  // true
console.log('Boolean("hello"):', Boolean("hello"));  // true
console.log('Boolean([1, 2, 3]):', Boolean([1, 2, 3]));  // true

//    b. Write three JavaScript statements which provide falsy value.
console.log('\n--- Falsy Values ---');
console.log('Boolean(0):', Boolean(0));  // false
console.log('Boolean(""):', Boolean(""));  // false
console.log('Boolean(null):', Boolean(null));  // false

// 5. Figure out the result of the following comparison expressions
console.log('\n--- Comparison Results ---');
console.log('a. 4 > 3:', 4 > 3);           // true
console.log('b. 4 >= 3:', 4 >= 3);         // true
console.log('c. 4 < 3:', 4 < 3);           // false
console.log('d. 4 <= 3:', 4 <= 3);         // false
console.log('e. 4 == 4:', 4 == 4);         // true
console.log('f. 4 === 4:', 4 === 4);       // true
console.log('g. 4 != 4:', 4 != 4);         // false
console.log('h. 4 !== 4:', 4 !== 4);       // false
console.log("i. 4 != '4':", 4 != '4');     // false
console.log("j. 4 == '4':", 4 == '4');     // true
console.log("k. 4 === '4':", 4 === '4');   // false

// 6. Find the length of 'python' and 'jargon' and make a falsy comparison statement.
console.log('\n--- String Length Comparison ---');
let pythonLength = 'python'.length;  // 6
let jargonLength = 'jargon'.length;  // 6
console.log("'python'.length:", pythonLength);
console.log("'jargon'.length:", jargonLength);
console.log('pythonLength != jargonLength:', pythonLength != jargonLength);  // false

// 7. Use logical operators
console.log('\n--- Logical Operators ---');
console.log('a. 4 > 3 && 10 < 12:', 4 > 3 && 10 < 12);           // true
console.log('b. 4 > 3 && 10 > 12:', 4 > 3 && 10 > 12);           // false
console.log('c. 4 > 3 || 10 < 12:', 4 > 3 || 10 < 12);           // true
console.log('d. 4 > 3 || 10 > 12:', 4 > 3 || 10 > 12);           // true
console.log('e. !(4 > 3):', !(4 > 3));                            // false
console.log('f. !(4 < 3):', !(4 < 3));                            // true
console.log('g. !(false):', !(false));                            // true
console.log('h. !(4 > 3 && 10 < 12):', !(4 > 3 && 10 < 12));     // false
console.log('i. !(4 > 3 && 10 > 12):', !(4 > 3 && 10 > 12));     // true
console.log("j. !(4 === '4'):", !(4 === '4'));                    // true

// 8. Use the Date object to get the current date and time
console.log('\n--- Current Date and Time ---');
const now = new Date();
console.log('a. Year:', now.getFullYear());
console.log('b. Month:', now.getMonth() + 1);  // getMonth() returns 0-11
console.log('c. Date:', now.getDate());
console.log('d. Day:', now.getDay());  // 0 = Sunday, 1 = Monday, etc.
console.log('e. Hours:', now.getHours());
console.log('f. Minutes:', now.getMinutes());
console.log('g. Seconds:', now.getSeconds());

// ========================================
// LEVEL 2
// ========================================

// 1. Calculate area of triangle
console.log('\n--- Triangle Area ---');
let base = 10;
let height = 5;
let triangleArea = 0.5 * base * height;
console.log(`Triangle with base ${base} and height ${height} has area: ${triangleArea}`);

// 2. Calculate perimeter of triangle
console.log('\n--- Triangle Perimeter ---');
let sideA = 5;
let sideB = 4;
let sideC = 3;
let perimeter = sideA + sideB + sideC;
console.log(`Triangle with sides ${sideA}, ${sideB}, ${sideC} has perimeter: ${perimeter}`);

// 3. Calculate area and perimeter of rectangle
console.log('\n--- Rectangle ---');
let length = 10;
let width = 5;
let rectArea = length * width;
let rectPerimeter = 2 * (length + width);
console.log(`Rectangle area: ${rectArea}`);
console.log(`Rectangle perimeter: ${rectPerimeter}`);

// 4. Calculate area and circumference of circle
console.log('\n--- Circle ---');
let radius = 7;
const PI = Math.PI;
let circleArea = PI * radius * radius;
let circumference = 2 * PI * radius;
console.log(`Circle area: ${circleArea.toFixed(2)}`);
console.log(`Circle circumference: ${circumference.toFixed(2)}`);

// 5. Calculate slope, x-intercept and y-intercept of y = 2x - 2
console.log('\n--- Linear Equation: y = 2x - 2 ---');
let slope = 2;  // coefficient of x
let yIntercept = -2;  // constant term
let xIntercept = -yIntercept / slope;  // when y = 0, x = 2/2 = 1
console.log('Slope:', slope);
console.log('Y-intercept:', yIntercept);
console.log('X-intercept:', xIntercept);

// 6. Calculate slope between two points (2, 2) and (6, 10)
console.log('\n--- Slope Between Points ---');
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slopePoints = (y2 - y1) / (x2 - x1);
console.log(`Slope between (${x1}, ${y1}) and (${x2}, ${y2}): ${slopePoints}`);

// 7. Compare the slopes
console.log('\n--- Slope Comparison ---');
console.log(`Slope from equation (2) ${slope === slopePoints ? '===' : '!=='} Slope from points (${slopePoints})`);

// 8. Calculate y = x² + 6x + 9
console.log('\n--- Quadratic Equation: y = x² + 6x + 9 ---');
function calculateY(x) {
    return x * x + 6 * x + 9;
}
console.log('y when x = 0:', calculateY(0));   // 9
console.log('y when x = -3:', calculateY(-3)); // 0
console.log('y when x = 1:', calculateY(1));   // 16
console.log('y is 0 when x = -3');

// 9. Calculate pay
console.log('\n--- Pay Calculator ---');
let hours = 40;
let ratePerHour = 28;
let pay = hours * ratePerHour;
console.log(`Your weekly earning is ${pay}`);

// 10. Calculate seconds lived
console.log('\n--- Seconds Lived ---');
let yearsLived = 25;
let secondsPerYear = 365.25 * 24 * 60 * 60;  // accounting for leap years
let totalSeconds = yearsLived * secondsPerYear;
console.log(`If you are ${yearsLived} years old, you have lived ${Math.round(totalSeconds)} seconds`);

// 11. Human-readable time format
console.log('\n--- Date Formats ---');
const date = new Date();
const yyyy = date.getFullYear();
const mm = String(date.getMonth() + 1).padStart(2, '0');
const dd = String(date.getDate()).padStart(2, '0');
const hh = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');

console.log(`a. YYYY-MM-DD HH:mm => ${yyyy}-${mm}-${dd} ${hh}:${min}`);
console.log(`b. DD-MM-YYYY HH:mm => ${dd}-${mm}-${yyyy} ${hh}:${min}`);
console.log(`c. DD/MM/YYYY HH:mm => ${dd}/${mm}/${yyyy} ${hh}:${min}`);

// ========================================
// LEVEL 3
// ========================================

// 1. Formatted date with two-digit padding
console.log('\n--- Formatted Date ---');
console.log(`YYYY-MM-DD HH:mm => ${yyyy}-${mm}-${dd} ${hh}:${min}`);

// 2. Calculate seconds lived (more precise)
console.log('\n--- Precise Seconds Lived ---');
function calculateSecondsLived(years) {
    return Math.round(years * 365.25 * 24 * 60 * 60);
}
let ageInYears = 20;
console.log(`You are ${ageInYears} years old. You have lived ${calculateSecondsLived(ageInYears)} seconds.`);

// 3. Sort three numbers in ascending order
console.log('\n--- Sort Three Numbers ---');
function sortThreeNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => x - y);
    return numbers;
}
let num1 = 15, num2 = 5, num3 = 10;
console.log(`Numbers: ${num1}, ${num2}, ${num3}`);
console.log('Sorted:', sortThreeNumbers(num1, num2, num3).join(', '));

// 4. Check if number is even or odd
console.log('\n--- Even or Odd ---');
function checkEvenOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}
console.log(`7 is ${checkEvenOdd(7)}`);
console.log(`10 is ${checkEvenOdd(10)}`);

// 5. Check if number is positive, negative, or zero
console.log('\n--- Number Sign Check ---');
function checkNumberSign(number) {
    if (number > 0) return 'positive';
    if (number < 0) return 'negative';
    return 'zero';
}
console.log(`5 is ${checkNumberSign(5)}`);
console.log(`-3 is ${checkNumberSign(-3)}`);
console.log(`0 is ${checkNumberSign(0)}`);

// 6. Determine season
console.log('\n--- Season Determination ---');
function getSeason(month) {
    month = month.toLowerCase();
    if (month === 'december' || month === 'january' || month === 'february') {
        return 'Winter';
    } else if (month === 'march' || month === 'april' || month === 'may') {
        return 'Spring';
    } else if (month === 'june' || month === 'july' || month === 'august') {
        return 'Summer';
    } else if (month === 'september' || month === 'october' || month === 'november') {
        return 'Fall';
    } else {
        return 'Invalid month';
    }
}
console.log('January is:', getSeason('january'));
console.log('July is:', getSeason('july'));

// 7. Check if weekend or weekday
console.log('\n--- Weekend or Weekday ---');
function checkDayType(day) {
    day = day.toLowerCase();
    if (day === 'saturday' || day === 'sunday') {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`;
    } else {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`;
    }
}
console.log(checkDayType('saturday'));
console.log(checkDayType('monday'));

// 8. Days in a month
console.log('\n--- Days in Month ---');
function getDaysInMonth(month, year = 2024) {
    const daysInMonth = {
        january: 31, february: year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28,
        march: 31, april: 30, may: 31, june: 30,
        july: 31, august: 31, september: 30,
        october: 31, november: 30, december: 31
    };
    return daysInMonth[month.toLowerCase()] || 'Invalid month';
}
console.log('February 2024 has', getDaysInMonth('february', 2024), 'days');
console.log('February 2023 has', getDaysInMonth('february', 2023), 'days');

// 9. Check leap year
console.log('\n--- Leap Year Check ---');
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(`2024 is ${isLeapYear(2024) ? 'a' : 'not a'} leap year`);
console.log(`2023 is ${isLeapYear(2023) ? 'a' : 'not a'} leap year`);
console.log(`2000 is ${isLeapYear(2000) ? 'a' : 'not a'} leap year`);
console.log(`1900 is ${isLeapYear(1900) ? 'a' : 'not a'} leap year`);

// 10. Simple calculator
console.log('\n--- Simple Calculator ---');
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}
console.log('10 + 5 =', calculator(10, 5, '+'));
console.log('10 - 5 =', calculator(10, 5, '-'));
console.log('10 * 5 =', calculator(10, 5, '*'));
console.log('10 / 5 =', calculator(10, 5, '/'));
console.log('10 / 0 =', calculator(10, 0, '/'));
