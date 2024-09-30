// if statement

// if(true){
//     // code will execute if true
//     // code will not execute if false
// }

// == only checks value
// === checks datatype along with value
if (2 == '2') {
    console.log("execute");
}
if (2 === '2') {
    console.log("will not execute"); // won't execute as === checks datatype also 
    // and both 2s are of different datatype(int === string)
}
// example of scope working:
const score = 40;
if (score < 100) {
    const power = 'fly'
    console.log(`Power assigned: ${power}`);
}
// console.log(`Power assigned: ${power}`); // when we take this out of the scope, it'll not exxecute
// but if we use var datatype then it'll access outside the particular scope as it's global 
// but it's not a good practice

// Nullish Coalescing operator (??): null undefined
let val1 = 5 ?? 10 // 5
let val2 = null ?? 10 // it'll print 10 as the ?? operator checks the condition if it's null and then 
// after checking safety other value is printed
let val3 = null ?? 10 ?? 20 // here the first value after null will be assigned to the varible which is 10

console.log(val1);
console.log(val2);
console.log(val3);

// Imp: If there is no break statement added before the default case, default will also be executed. 
// In this example, the default case was not executed because the break keyword was used before it.


// Terniary Operator (?):
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80"); // more than 80