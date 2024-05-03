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

//do while loop 
var i = 0;
do {
    console.log("Iteration " + (i + 1));
    i++;
} while (i < 5);



//for in loop 
var person = { name: "John", age: 30, city: "New York" };
for (var key in person) {
    console.log(key + ": " + person[key]);
}


