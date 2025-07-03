// Coversions
let score = "abc"
let nullScore=null
let unScore = undefined;
let booleanScore = false

console.log(typeof score);
console.log(typeof nullScore);
console.log(typeof unScore);
console.log(typeof booleanScore);

let valOfString = Number(score);
let valOfNull = Number(nullScore);
let valOfUndefined = Number(unScore);
let valOfBoolean = Number(booleanScore);

console.log(typeof(valOfString));
console.log(valOfString);

console.log(typeof(valOfNull));
console.log(valOfNull);

console.log(typeof valOfUndefined);
console.log(valOfUndefined);

console.log(typeof valOfBoolean);
console.log(valOfBoolean);

// // // Similarly for Number to Boolean

let isLoggedIn = " "

console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


// //Operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(5/2);
console.log(5%2);

let str1 = "hello"
let str2 = " harsh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( 3 + 4 * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// also studied
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

let x2 = 3n;
const y2 = x2++;
console.log(`x2:${x2}, y2:${y2}`);





