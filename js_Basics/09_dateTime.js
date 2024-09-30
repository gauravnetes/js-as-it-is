//  Date
let myDate = new Date()
console.log(myDate); // not readable
console.log(myDate.toString()); // readable after converting to string. Fri May 03 2024 21:27:06 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri May 03 2024
console.log(myDate.toJSON());  // 2024-05-03T15:57:06.209Z
console.log(myDate.toLocaleString()); // 3/5/2024, 9:28:32 pm
console.log(myDate.toISOString()) //2024-05-03T15:59:09.594Z
console.log(myDate.toLocaleTimeString()); // 9:29:54 pm
console.log(myDate.toLocaleDateString()); // 3/5/2024
console.log(typeof (myDate)); // it's object type

// let createdDate = new Date(2023, 0, 23, 21, 54, 34) // month start at 0 in js so here it's january 
//  format: [yyyy/m/dd / hh/mm/ss] It follows 24 hours format

// Another method
let createAnotherDate = new Date("2024-05-03"); // another date formats can be used
console.log(createAnotherDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createAnotherDate.getTime()); // these gives values in miliseconds
console.log(Math.floor(Date.now() / 1000)); // to convert miliseconds values in seconds we can divide it by 1000.
// and for the remaining decimal values we can use Math.floor which will cut down the decimals 

let newDate = new Date()
console.log(newDate.getMonth() + 1) // as in js month start from 0. so to remove confusion we add 1 in generated month for systemetic month
console.log(newDate.getDay());

`${newDate.getDay()}` 
// VS code intellisense shortcut: ctrl + space
newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'IST',
})
console.log(newDate.toLocaleString());