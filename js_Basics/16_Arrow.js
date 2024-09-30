const user ={
    username: "gourav",
    price: 499,

    welcomeMessage: function(){
        console.log(`Hey ${this.username}, welcome to our website!`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "chandra"  // username is now changed to chandra. "context" is changed
// user.welcomeMessage()  // will print Hey chandra, welcome to our website!
// console.log(this) // it'll be empty parenthesis. But if we run this in browser console. then it will give window object
// as there's window object in the browser.


function demo() {
    let username = "gourav"
    console.log(this) // but here in function we can't print [this.username]. that'll be undefined
}
demo()

// Using Arrow function
const demo1 = () => {       // basic syntax of Arrow function. now demmo is a function
    let username = "gourav"
    console.log(this) // here in arrow function also we can't print [this.username]. that'll be undefined. 
    // this keyword will give empty parenthesis here
}
demo1()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(2,4))

// we can also use implicit return in arrow function. for example

const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(3, 4, 34)) // output of some of three numbers.

// To return an Object:
const addTwo = (num1, num2) => ({username: "gourav"})
console.log(addTwo(3,2));