const animeHeros = ['naruto', 'luffy', 'ichigo']
const animeVillains = ['madara', 'zoro', 'aizen']

// animeHeros.push(animeVillains)
// console.log(animeHeros)

const allChar = animeHeros.concat(animeVillains) // concat will join two arrays in a proper array format.
console.log(allChar);

// difference: PUSH / CONCAT
// PUSH operation pushes element in the existing array.
// CONCAT operation gives new array after pushing elements to the array.

// another way:
const allNewChars = [...animeHeros, ...animeVillains] // will do the same work as concat operations.
// we can add multiple array in this operation
console.log(allNewChars);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]  // concatinated array
const usableAnotherArr = anotherArr.flat(Infinity) // it'll give the clear array without any concatination
console.log(usableAnotherArr);

console.log(Array.isArray("gourav")); // will check if the datatyype is array or not
console.log(Array.from("gourav"));     // to convert it into array from() operation is used.
console.log(Array.from({name: "gourav"})); // can't determine will give an empty array

let scr1 = 10;
let scr2 = 20;
let scr3 = 30;
console.log(Array.of(scr1, scr2, scr3)); // output: [ 10, 20, 30 ]