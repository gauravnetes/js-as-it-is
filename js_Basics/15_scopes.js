let a = 100
if (true) {
    let a = 10
    const b = 20
    console.log("Inner:",a); // this a will print 10. It's called block scope
}
console.log("Outer:",a);  // this a will print 100. It's called global scope

// console.log(b);
// console.log(c);

function one(){
    const username = "gourav"
    function two(){
        const website = "github"
        // console.log(username);
    }
    // console.log(website); // will give error cause website is not defined outside the function block/scope.
    two()
}
one()

// *************** Important Concept ****************

console.log(addone(5)) // it'll get incremented and print 6
function addone(num){
    return num+1
}

console.log(addtwo(5)) // but here it'll throw error cause we assigned the function in a variable
const addtwo = function(num){
    return num+2
}
