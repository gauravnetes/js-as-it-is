const user1 = {
    username: 'Gourav',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // now as we want to get access of the username
        // we must have to use the 'this' keyword. if we injected only username then it would throw error.
        console.log(this); // if we print only this here it'll print the current context 
        // which is this object.
    }
}
console.log(user1.username);
console.log(user1.getUserDetails());
console.log(this); // if we print this in global execution context then it'll give {} empty parenthesis
// which indicates there is nothing in the global contxt at this moment

// constructor function
// const promiseOne = new Promise() // here new is a constructor function.
// // It allows us to create multiple instances from one object literal
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this // even if we dont return this. we'll get same output
}
const userOne = new User("gourav", 2, true)
const userTwo = new User("june", 3, false) // now it'll get overwritten in the userOne
console.log(userOne);
console.log(userTwo);

// now to solve this overwrite problem we have to use the new keyword
// which creates a new copy everytime and dont affect the original

// 'new' keyword:
// creates an empty object atfirst which is called instance
// constructor function called
// now arguments are injected into the this keyword
// now we can get the access in the function
