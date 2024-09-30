// Memory: Stack, Heap
// Primitive datatype: stack memory
// Non Primitve datatype: heap memory

let myName = "Gourav Chandra"

let anotherName = myName            // we're not assigning the value. We're assigning copy of the value 
anotherName = "Deba Prasad Chandra"

console.log(myName);
console.log(anotherName);

let userOne = {
    emailId: "user@gmail.com",
    upiId: "user@ybl",
}
let userTwo = userOne  //now we're assigning value right after getting from heap memory. so it's not copy. it's tshe value itself.

userTwo.emailId = "gourav@gmail.com"
console.log(userOne.emailId);
console.log(userTwo.emailId);
// both cases will give same value