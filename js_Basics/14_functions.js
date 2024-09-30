
// Function Defination:
function sayMyName() {
    console.log("G");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}
sayMyName();  // function call

// function addTwoNumbers (num1, num2) {
//     console.log(num1+num2);
// }
addTwoNumbers(7,9);
addTwoNumbers(9,'8'); // now if we dont pass number in the parameters then js will identify it as the other datatype given. which is string
// and will give output of 98.
const result = addTwoNumbers(7,9); // stored the function output in the variable result
console.log(result); // but now it'll show undefined

// now to solve the problem we have to follow some process in the function defination:
function addTwoNumbers (num1, num2) {
    // let result = num1 + num2
    // return result;  // now this is returning the variable which storing the value of num1+num2
    return num1 + num2  // or we can directly return num1+num2. which will give expected results.
}

function loggedInUser(username) {
    if (username == undefined) {               // we can also write (!username) in the condition in place of (username == undefined)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// to call the function:
console.log(loggedInUser("Gourav")) // now here is the proper function call.
console.log(loggedInUser()) // if we don't pass any value in the parameters then it'll show undefined in output

// to get a default value of the parameter we can declare it like that in the function 
function loggedIn(usesr = "Gourav"){  // now if we don't pass any parameter, then by default it's Gourav. which we can overwrite later

}
// if we have a shopping cart where user can add end no. of items to cart we have to use rest operator for that process
function calculateCartPrice(val1 , val2, ...num1){
    return num1
}
console.log(calculateCartPrice(299, 399, 199, 99)) // it'll print array of numbers user added to cart. 
// it'll give output of array:[ 199, 99 ] as the first two are passed in te val1, val2 parameters.

const user ={
    username: "gourav",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${user.username} and price is ${user.price}`);
}
handleObject({
    username: "june",
    price: 999
})

const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); // output: 400
console.log(returnSecondValue([299, 499, 599, 699])); // output: 499
