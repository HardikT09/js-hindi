// Primitive

const { captureOwnerStack } = require("react");

// 7 types : String, number, boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456978950085n


//const heros = ["spiderman","Batman","ironman"]
//let myobj = { name:Hardik
    age: 20
//}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);

//reference(non primitive)

// Array, Objects, Functions

//-------------------------------------------------------------------------------------------
// stack(primitive)   Heap(non primitive)

let myYoutubename = "HardikTakkar"

let anothername = HardikT
anothername = "TakkarHardik"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email="hardik@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


