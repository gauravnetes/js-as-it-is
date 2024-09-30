// Primitive Datatypes: 7 types 
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt


// js is a dynamically typed language

const score = 100
const scoreValue = 100.3
// It'll check and define the datatype at runtime. And above 2 variables are numbers. There is no concept of float or int in js

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id == anotherId)   //will give false as Symbols are unique even if the number given is same

// Referernce Datatype (non primitives):
// Array, Objects, Functions
// The non primitive type have the datatype of object

const animeChar = ("Eren", "Armin", "Mikasa", "Levi" , "Erwin") //defined as arrays

let myObj = {
    name: "Gourav",
    age: 18,
}                   //defined as Object (eqv to Structure in c)

const myFunction = function() {
    console.log("Hey There")
}                   //defined as Functions 
