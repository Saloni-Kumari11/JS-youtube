//singleton
//object create


const mySym = Symbol("key1")

//object literals
const JsUser = {
    name: "Saloni",
    "full name": "Saloni Kumari",
    [mySym]: "mykey1",
    age: 21,
    location: "Deoghar",
    email: "saloni@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saloni@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="saloni@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());