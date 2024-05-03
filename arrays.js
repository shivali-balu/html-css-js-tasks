// Array of numbers
var numbers = [1, 2, 3, 4, 5];

// Array of strings
var fruits = ["apple", "banana", "orange"];

// Array of mixed data types
var mixedArray = [1, "hello", true, null, { name: "John", age: 30 }]; 

fruits.push("grape"); // Add an element to the end
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop(); // Remove the last element
console.log(fruits); // Output: ["apple", "banana", "orange"]

var fruits = ["apple", "banana", "orange"];
var firstFruit = fruits.shift();
console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ["banana", "orange"]


var fruits = ["apple", "banana", "orange"];
fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "apple", "banana", "orange"]


var fruits = ["apple", "banana", "orange", "grape", "kiwi"];
var citrus = fruits.slice(2, 4);
console.log(citrus); // Output: ["orange", "grape"]
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]


var fruits = ["apple", "banana", "orange", "grape"];
// Remove 2 elements starting from index 1, and add "mango" and "kiwi"
var removedFruits = fruits.splice(1, 2, "mango", "kiwi");
console.log(removedFruits); // Output: ["banana", "orange"]
console.log(fruits); // Output: ["apple", "mango", "kiwi", "grape"]
