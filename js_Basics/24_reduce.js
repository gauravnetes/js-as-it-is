const array = [1, 2, 3]

let totalArr = array.reduce(function (accumulator, currentvalue) {
    console.log(`accumulator: ${accumulator} currentvalue: ${currentvalue}`);
    return accumulator + currentvalue
}, 0)             // 0 is value of the accumulator whhich have been initialized
console.log(totalArr);

// reduce in Arrow function representation
totalArr = array.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(totalArr);

// example
const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 3999
    }, 

    {
        itemName: "pythonCourse",
        price: 2999
    },

    {
        itemName: "javaCourse",
        price: 4999
    },

    {
        itemName: "dsaCourse",
        price: 999
    },

    {
        itemName: "MLCourse",
        price: 6999
    },
]

const payingPrice = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(payingPrice);