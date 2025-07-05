// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const total = numbers.reduce(
//     function(accumulator, cuurentValue) 
//     {
//         return accumulator+ cuurentValue
//     },0)

// const total = numbers.reduce((accumulator, currentValue) => accumulator+currentValue, 0)

// console.log(total);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce((acc,course) => (acc+course.price),0)
console.log(total);
