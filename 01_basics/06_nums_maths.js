//Numbers

const amount = 1000;
const balance = new Number(1000);

console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));
console.log(balance.toString());
console.log(balance.toExponential(2));
console.log(balance.toLocaleString('en-IN'));

//Maths

console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(4.5));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.8));
console.log(Math.max(2,5,4,8,1));
console.log(Math.min(2,5,4,8,1));


console.log(Math.random());
console.log(Math.random()*10);
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);





