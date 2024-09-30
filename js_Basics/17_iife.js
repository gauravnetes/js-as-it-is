// Immediately Invoked Functions Expressions:[IIFE]
/*
function demo(){
    console.log("Database Connected")
}
demo()

*/
// Alternative: [IIFE]
(function demo(){
    // NAMED IFFE
    console.log("Database Connected")  
})();
// [IMPORTANT FOR INTERVIEW]
// Problems often occurs from global scopes pollutions. 
// So to remove the pollution from the variables of global scope we use IFFE. 
// Immediately Invoked functions are invoked but they don't have stability to stop the contest.
// So ; is important to end the function invoke. To write two IFFEs together ; is must.

// To write IIFE in Arrow Functions:
( (name) => {
    // UNNAMED IFFE
    console.log(`Database Connected ${name}`);
})("gourav")
