const mySym = Symbol("key1")

const JsUser = {
    name: "Hardik",
    "fullname" : "Hardik Takkar",//cant access this from .
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "Hardik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["fullname"]);
//console.log(JsUser[mySym]);



JsUser.email = "HardikT@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "HardikT@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



