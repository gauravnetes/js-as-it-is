let score = 23
let score2 = "43"
console.log(typeof score);
console.log(typeof score2);

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);

// "33" => 33  -> "33" string can get easily converted to 33 number 
// "33abc" => can't be converted. will show NaN

let isLoggedIn = 1
let booleanisloggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisloggedIn);

// 1 => true  -> 1 can be converted to true which is boolean datatype

//  **** Operations ****
let value = 3
let negValue = -value
console.log(negValue)

console.log(2**3) // 2 to the power 3

console.log(true); //output: true
console.log(+true); //output: 1

let gameCounter = 100
gameCounter++     //post increment
//++gameCounter   //Pre increment
console.log(gameCounter)