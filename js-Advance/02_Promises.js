const promiseOne = new Promise(function(resolve, reject)
{
    // do an async task:
    // DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // by using this method we are connecting .
        // then and resolve so "Promise Consumed" can get printed
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "gourav", email: "gouravchandra@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "gourav", password: "23423"}) // will get printed if error = false
        }else{
            reject("ERROR: Something went wrong") // will get printed if error = true
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected")) // ot send the message at the last 
// that the promise is resolved/rejected

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // if false then no error will occur and everything will run smoothly
        if(!error){
            resolve({username: "javascript", password: "23649"}) // will get printed if error = false
        }else{
            reject("ERROR: js went wrong") // will get printed if error = true
        }
    }, 1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// } // problems of async await: they can't handle problems directly

// in try catch code:
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); // now it'll not throw error and will give error message
    }
} 
consumePromiseFive()

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }

 // showing Promise{<pending>} cause try catch is not put
// putting try catch

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // that response take time to be converte in json so await must be put there
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }


// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 
// Here there is no issue of throwing error and we don't have to use try catch. it'll execute step by step

// A fetch() promise only rejects when the request fails, for example, 
// because of a badly-formed request URL or a network error. 
// A fetch() promise does not reject if the server responds with 
// HTTP status codes that indicate errors (404, 504, etc.).
// Instead, a then() handler must check the Response.ok and/or Response.status properties.