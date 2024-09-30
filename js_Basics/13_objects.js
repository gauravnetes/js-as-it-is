// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "gouav"
tinderUser.isLoggedIn = true

console.log(tinderUser)

const regularUser = {
    email: "gourav@gmail.com",
    fullName: {
        userfullName: {
            firstName: "gourav",          // object inside an object
            lastname: "chandra"
        },
    },
}
console.log(regularUser.fullName.userfullName.firstName); // to access firstname gourav. dot notation


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1, obj2} // will print both objects but will not merge it.

const obj3 = Object.assign({}, obj1, obj2)  // now it'll merge the objects
// the {} paranthesis is used in the starting to consider it the target for other objects which are source. it's considered a 
// good practice.

// another way to concatinate two objects
const obj4 = { ...obj1, ...obj2 }

console.log(obj3);
console.log(obj4);

// when objects comes from databases it comes in array form
const users = [
    {
        id: 123,
        email: " abc@gmail.com"
    },

    {
        id: 123,
        email: " abd@gmail.com"
    },

    {
        id: 123,
        email: " abe@gmail.com"
    }
]

console.log(users[2].email); // to access array of objects  Op: abe@gmail.com

console.log(Object.keys(tinderUser));  // it'll turn the keys of that object into an array which can be further used 
// in various operations
// op: [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); // same as keys it's for values of the object
// op: [ '123abc', 'gouav', true ]

console.log(Object.entries(tinderUser)); // each key value of the object is converted into an seperate array 
// op: [ [ 'id', '123abc' ], [ 'name', 'gouav' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if the keys has their values. output will be in boolean[T/F]

const course = {
    coursename: "chai aur js",
    price: "999/-",
    courseteacher: "gourav",

}
// course.courseteacher  // to avoid writing this syntax end no. of times, there is an optional Syntax.
const {courseteacher} = course; //  now courseteacher is extracted we can directly run it without using the . syntax 
const {price: amount} = course;  // now the price term is replaced with amount.
console.log(courseteacher);


// simple structure of json file:
// {
//     "name": "gourav",
//     "courseprice": "free",
//     "coursename": "chai aur js"
// }
// we can also get api or json file in array format: [inside the array there are several objects]
[
    {},
    {},
    {}
]