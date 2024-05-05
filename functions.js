//function with arbitrary statements
function sum(a,b) {
    return a+b ; 
} 

console.log(sum(12,12)) ;  


//function with arbitrary arguments in javascript 
function add() {
    let total = 0 ; 
    for(let i = 0 ; i<arguments.length ; i++) {
        total+=arguments[i] ; 
    }
    return total ; 
} 

console.log(add(10,10,10)) ;  

//functions with spread operator 
function total(...args) {
    let tot = 0 ; 
    for(let i = 0 ; i<args.length ; i++) {
        tot+=args[i] ; 
    }
    return tot ; 
} 

console.log(total(10,10,10 , 10 , 10)) ;  


//functions as expression 
const mul = function(a,b) {
    return a*b ; 
} 

console.log(mul(2,2)) ;  


//Arrow functions 
const sub = (a,b)=>{
    return a-b ; 
}

console.log(sub(4,1)) ;  

//arrow functions with map  
let arr = [1,2,3,4,5] ;  
console.log(arr) ; 
let double = arr.map((num)=>num*2) ; 
console.log(double) ;  


//arrow functions with filter 
let words= ['apple' , 'banana' , 'orange' , 'grape' , 'kiwi'] ;  
let filtered_words = words.filter((fruit)=>fruit.length>5) ; 
console.log(words) ; 
console.log(filtered_words) ; 


//arrow function with reduce
let result = arr.reduce((i , sum)=>i+sum , 0) ; 
console.log(result) ;  


//arrow function with closure 

function counterFunc  (){
    let count = 0 ;
    return()=>{
        count++ ; 
        return count ; 
    }
} 

let counter = counterFunc() ;  
console.log(counter()) ; 


//callback functions
function high(fun) { // Higher order functions 
    fun() ; 
} 

function myCallback() { //callback function
    console.log("i am a callback function") ; //callback functions
} 

high(myCallback) ;  


/* //Settimeout function -> setTimeout(function , seconds) ; 
function myTimeout() {
    console.log("I will print second !") ;  
} 

setTimeout(myTimeout , 2000) ;  


setTimeout(function() {
    console.log("i will print first !") ; 
} , 1000) 
 */
//setInterval function -> setInterval(function , 1) 

setInterval(function() {
    console.log("I will print once interval !") 
} , 2000) ;  


//callback function  in for-each 
const numbers = [1,2,3] ; 
numbers.forEach(function(num){
    console.log(num) ; 
})