//if else 
var x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}


//switch statements 
var day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    // Add more cases for other days
    default:
        console.log("It's another day of the week.");
}


//for loop 
for (var i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
}
 

//while loop 
var i = 0;

while (i < 5) {
    console.log("Iteration " + (i + 1));
    i++;
}
 

//user defined functions 
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice"); // Output: Hello, Alice!
 

//arrow functions 
var divide = (x, y) => {
    return x / y;
};

console.log("The result of division is: " + divide(10, 2)); // Output: The result of division is: 5
