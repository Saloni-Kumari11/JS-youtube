//kis type ses data memory m store hai

//primitive datatype :- 
//7 types : String, Number, Boolean , null
//          undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null


let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 344355899788793999n  // n represents BigInt



//Reference (non primitive) datatypes:-
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "saloni",
    age : 20,
}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof scoreValue)
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof anotherId);


