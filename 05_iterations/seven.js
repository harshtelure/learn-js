const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = numbers
//                     .map((num) => num*13 )
//                     .map((num) => num+52)
//                     .filter((num => num%3 === 0));

// const newNums = numbers
//                     .map((num) => num*13 )
//                     .filter((num => num>20));
//                     .filter((num => num%3 === 0));


const newNums = numbers
                    .filter((num => num%3 === 0))
                    .map((num) => num*13 )
                    .map((num) => num+52);

console.log(newNums);
