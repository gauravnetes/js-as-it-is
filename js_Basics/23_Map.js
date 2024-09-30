const myNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNames.map((num) => num + 10)
console.log(newNums); 

// chaining 
const newNum = myNames
                .map((num) => num*10)       // first nums will be multiplied by 10. then multiplied 
                .map((num) => num + 1)      // nums will be incremented by 1
                .filter((num) = num >= 40 )  // can also use filter method with this and filter wrt to the conditions
console.log(newNum);
