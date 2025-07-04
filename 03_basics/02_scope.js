// bad pratice to use var because it does not have any scope defined
// var c = 300
// console.log(c);
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(c);
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// let c = 300
// console.log(c);
// if (true) {
//     let c = 10
//     console.log(c);
// }

// console.log(c);

// const c = 300
// console.log(c);
// if (true) {
//     const c = 10
//     console.log(c);
// }

// console.log(c);

// let c = 300
// console.log(c);
// if (true) {
//     c = 10
//     console.log(c);
// }

// console.log(c);

//Once a constant is defined globally it cannot ne changed locally
// const c = 300
// console.log(c);
// if (true) {
//     c = 10
//     console.log(c);
// }

// console.log(c);

// function addOne(num){
//     return num+1
// }

// const addTwo = function(num){
//     return num+2
// }

// let addThree = function(num){
//     return num+3
// }

// console.log(addOne(5));
// console.log(addTwo(5));
// console.log(addThree(5));

//Whenever a function is stored in expression i.e. in const or let type variable, is cannot be accessed before declaration

console.log(addOne(5));
// console.log(addTwo(5));
// console.log(addThree(5));

function addOne(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}

let addThree = function(num){
    return num+3
}


