const name = "Gourav"
const repoCount = 100

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// ${variableName} gives permission inject variable. above will give output:
// Hello my name is Gourav and my repoCount is 100

const gameName = new String("gourav-netes")
console.log(gameName[0]); // will print g
console.log(gameName.__proto__); // will print {}
console.log(gameName.length); // will print 11 which length of the word gouravnetes
console.log(gameName.toUpperCase()); // will convet gameName to uppercase letters and print GOURAVNETES
console.log(gameName.charAt(3));  // will print char at 3rd index
console.log(gameName.indexOf('t')); //will print at which index 't' is

const newString = gameName.substring(0, 4) //will slice the string from 0th index to 4th. will print gour
// if we give negative value in substring. Then it'll start from 0th index by default
console.log(newString)

const newStringOne = '   gourav   '
console.log(newStringOne);
console.log(newStringOne.trim()) // will trim all the extra spaces during runstime.

const url = "https://gourav.com/gourav%20chandra"
console.log(url.replace('%20', '-'));   // will replace the '%20' term in url by '-'  and will print https://gourav.com/gourav-chandra

console.log(url.includes('gourav'));  // will check if that url includes gourav and will give output in boolean

console.log(gameName.split('-')) // will split the name 'gouravnetes' on the basis of '-' will print gourav, netes
