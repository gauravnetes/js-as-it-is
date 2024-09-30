// arrays
const myArr = [1, 4, 5, 6, 7]
const myAnime = ['eren', 'levi', 'erwin']
console.log(myArr[0]); // we've taken 0th index to access the first element of the array. Array: 0 base indexing
const myArr2 = new Array(1, 2, 3, 4)

// Array methods:
myArr.push(6)  // to push an element to an existing array
myArr.pop()  // the last element of the array will be removed.
myArr.unshift(9) // to push element in the first of an existing array
myArr.shift() // the first element of the array will be removed.

console.log(myArr);
console.log(myArr.includes(8)); // checks if the given element is present in the array and gives output in boolean(T/F)
console.log(myArr.indexOf(8)); // checks the indes of the given element. here as 8 is not an element of an array.
// so the output will be -1

const newArr = myArr.join() // this operation join two arrays but the second joined array remain in string format 
 
// slice / splice
console.log("A ", myArr) // A  [ 1, 4, 5, 6, 7 ]
const myn1 = myArr.slice(1,3) // don't include the third index  
console.log(myn1);  // output: [ 4, 5 ]
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // includes the last mentioned index. in this case the third index.
console.log("C ", myArr); // after the splice operation the spliced elements are removed from the original array.
//  output: C  [ 1, 7 ]
console.log(myn2); // output: [ 4, 5, 6 ]

