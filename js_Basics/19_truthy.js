const userEmail = "example.com"
if (userEmail) {
    console.log("got user emaii"); // in these cases this is assumed that userEmail have valid value 
    // and then the code is executed. It'll not work on empty string
}else {
    console.log("Don't have user email");
}

// falsy values:
// 0, -0, BigInt, 0n, "", null, undefined, NaN
// Truthy values:
// "0", 'false', " ", [], {}, function(){}

// How to check if arrays are empty
const user = []
if (user.length === 0) {
    console.log("array is empty");
}
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {  // Object iis firstly converted into array then check the length
    console.log("Object is empty");
}