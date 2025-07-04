//Immediately Invoked Function Expression (IIFE)

// function sayMyName()
// {
//     console.log("Harsh");
// }

// sayMyName()

// (function sayMyName()
// {
//     console.log("Harsh");
// })();

// (() => {
//     console.log("Harsh");
// })();

// (() => (console.log("Harsh")))();

((name) => (console.log(`${name}`)))("Harsh");