const accountId = 144553   //assigned value can't be changed.
let accountEmail = "gouravchandra935@gmail.com"
var accountPassword = "12345"   //Prefer not use var because of issues in var scope & functional scope
accountCity = "Kolkata"
let accountState;

// accountId = 2
// console.log(accountId)   //will not execute 
accountEmail = "oiyuhls@gmail.com"
accountPassword = "987980"
accountCity = "Delhi"

console.table([accountEmail, accountId, accountPassword, accountCity])
console.log(accountState); //will show undefined