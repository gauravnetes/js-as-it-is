// singleton
// object literals

// Object.create()

const sym1 = Symbol("key1")
const jsUser = {
    name: "gourav",
    age: 18,
    [sym1]: "myKey",
    location: "kolkata",
    email: "gouravchandra935@gmail.com",
    lastLoginDays: ["sunday", "monday"]
}
console.log(jsUser.lastLoginDays[1]); // to access object elements
// another method ot access:
console.log(jsUser["email"]);

console.log(jsUser[sym1]);  // to access symbol

// How to change values of the objects:
jsUser.email = "gourav@gmail.com"
console.log(jsUser.email);

// Object.freeze(jsUser) // The object jsUser will be freezed and can't be modified/changed anymore.

jsUser.greeting = function () {
    console.log(`hello js user ${this.name}`);           
}