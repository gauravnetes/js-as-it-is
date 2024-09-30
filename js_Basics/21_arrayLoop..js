// for of
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map)  // will print like object but it'll always print unique values.
// Repetition of values are not allowed

// for of loop application on map:
for (const [key, value] of map) {
    console.log(key, ":", value);  // now it'll seperate key and value from the aray then print
}

// const myObj = {
//     game1: "NFS",
//     game2: "eFootball"
// }

// for of loop is not applicable for objects


// About objects: for in loop is used for printing objects in js
const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObj) {
    console.log(key);  // all keys will be printed
    console.log(myObj[key]); // now values will be printed
    console.log(`${key} shortcut for ${myObj[key]}`); // now values of each key will be printed
}

// for in loop on array:
const programming = ['js', 'py', 'rb', 'cpp', 'kotlin']
for (const key in programming) {
   console.log(key); // will print key instead of value. Array's keys are: 0 1 2 3 ... 
   console.log(programming[key]); // values will get printed now
}

// Maps can't be iterated on for in loop


// for each loop: [for each loop will ask to give callback function]
const coding = ['js', 'java', 'ruby', 'python']
// coding.forEach( function (val) {                // As it's a callback function it don't have a name
//     console.log(val);
// } )

// for each loop with arrow function:
coding.forEach((value) => {    // Arrow function
    console.log(value); 
});

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe())

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);       // will print detailly with item, index and arraylist
})

// Objects inside Array:
const myCode = [
    {
        languageName: "javascript",
        languageFile: "js",
    },

    {
        languageName: "java",
        languageFile: 'java'
    },

    {
        languageName: "python",
        languageFile: "py"
    }
]
// to execute objects inside an Array:
myCode.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFile); 
} )
