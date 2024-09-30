// ***************** Numbers in Js *****************

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);  // it is specifically defining that this is number 100

console.log(balance.toString()); // now it has become a string and it'll be available for string operations
console.log(balance.toString().length) 
console.log(balance.toFixed(2)) // will print 100.000 upto 3 decimals

const otherNumber = 45.0278
console.log(otherNumber.toPrecision(3)); // will print 45.0 as rounded of to 3 digits.

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // will give output in Indian value

// **************** Maths in Js ******************

console.log(Math)
console.log(Math.abs(-4)); // will print absolute value -4 -> 4
console.log(Math.round(3.12)) // will print 3 after rounding off
console.log(Math.ceil(4.2)); // will take top value while rounding off 4.2 -> 5
console.log(Math.floor(4.2)); // will take lower value while rounding off 4.2 -> 4
console.log(Math.min(4,4,1,5,6,34)); // will give lowest value among these -> 1

console.log(Math.random()); // generated number range will be between 0 and 1
console.log((Math.random()*10) + 1) // now the number will be minimum 1 as it's multiplied by 10

const min =1
const max =100

console.log(Math.floor(Math.random() * (max - min + 1))+ min) // it'll give single number