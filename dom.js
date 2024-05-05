function changeHeading() {
    let heading = document.getElementById("heading") ; 
    heading.textContent = "New content"  
    heading.style.color = "green" 
} 

let btn = document.getElementById("btn") ; 

btn.addEventListener("click" , changeHeading) ; 