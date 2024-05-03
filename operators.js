var x = 10;
var y = 5;

console.log(x + y); // Addition: 15
console.log(x - y); // Subtraction: 5
console.log(x * y); // Multiplication: 50
console.log(x / y); // Division: 2
console.log(x % y); // Modulus (Remainder): 0
console.log(x ** y); // Exponentiation: 100000
console.log(++x); // Increment: 11
console.log(--y); // Decrement: 4


var x = 10;
var y = 5;

x += y; // Equivalent to: x = x + y;
console.log(x); // Output: 15

x -= y; // Equivalent to: x = x - y;
console.log(x); // Output: 10

x *= y; // Equivalent to: x = x * y;
console.log(x); // Output: 50

x /= y; // Equivalent to: x = x / y;
console.log(x); // Output: 10

x %= y; // Equivalent to: x = x % y;
console.log(x); // Output: 0

x **= y; // Equivalent to: x = x ** y;
console.log(x); // Output: 0

var x = 10;
var y = 5;

console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y); // Greater than: true
console.log(x < y); // Less than: false
console.log(x >= y); // Greater than or equal to: true
console.log(x <= y); // Less than or equal to: false

var x = true;
var y = false;

console.log(x && y); // AND: false
console.log(x || y); // OR: true
console.log(!x); // NOT: false

var x = 10;
var result = (x > 5) ? "x is greater than 5" : "x is not greater than 5";
console.log(result); // Output: x is greater than 5
