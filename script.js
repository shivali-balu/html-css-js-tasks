// Get references to the elements
var myDiv = document.getElementById("myDiv");
var myButton = document.getElementById("myButton");

// Add event listener to the button
myButton.addEventListener("click", function() {
    // Change content
    myDiv.innerHTML = "Content Changed!";
    
    // Change style
    myDiv.style.backgroundColor = "lightgreen";
    myDiv.style.color = "white";
    myDiv.style.fontSize = "24px";
});


