// for loop
for (let i = 0; i <= 10.; i++) {
    console.log(i); 
}
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        console.log(`Inner loop value: ${j} and inner loop ${i}`);
    }
}

let myArray = ["sfwe", "hwei", "oawe"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break; // will break the control flow and loop will not execute after detected 5
    }
    console.log(`value of i is: ${index}`);

}

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue; // will continue the itteration without printing the value if condition detected
    }
    console.log(`value of i is: ${index}`);

}

// while
let index = 0
while ( index <=10) {
    console.log(`Value of index is: ${index}`);
    index++
}
let myarr = ["exp1", "exp2", "exp3"]
let arr = 0
while (arr < myarr.length) {
    console.log(`Value is: ${myarr[arr]}`);
    arr++
}

// do while [will execute atleast once]
let score = 11 
do {
    console.log(`value of score: ${score}`);
    score++
} while (score <= 10); // now even if the condition doesn't meet,
// the loop will execute atleast once which is 11