let promise = new Promise((resolve , reject)=>{
    let sum = 3+1 ;  
    if(sum == 2) {
        resolve("Sucess")
    } 
    else {
        reject("Error")
    }
}) 

promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err)) ;  



//promise with asynchronous code 
