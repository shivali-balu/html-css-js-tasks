var btn = document.getElementById("btn") ; 

btn.addEventListener("click" , submitForm) ; 

function submitForm() {
    let name = document.getElementById("name").value ; 
    let email = document.getElementById("email").value ; 
    let pwd = document.getElementById("pwd").value ; 
    
    if(name.length > 0 && pwd.length > 0 && email.includes("@")){
        alert("Login successful !") ; 
        document.getElementById("name").value = "" ; 
        document.getElementById("email").value = "" ; 
        document.getElementById("pwd").value = "" ;  
    } 
    else {
        alert("Please check all the fields") ;  
    }    
}
