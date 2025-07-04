// const user = {
//     name: "Harsh",
//     welcomeMessage : function() {
//         console.log(`${this.name} ,welcome!!`)
//         console.log(this);
//     },
// }

// user.welcomeMessage()
// user.name = "Manoj"
// user.welcomeMessage()

// console.log(this);


// function sayMyName() {
//     console.log(this)
// }

// sayMyName()


// function sayMyName() {
//     const name = "Harsh"
//     console.log(this.name)
// }

// sayMyName()


// const sayMyName = ()  => {
//     console.log(this)
// }

// sayMyName()

// const sayMyName = ()  => {
//     const name = "Harsh"
//     console.log(this.name)
// }

// sayMyName()

// const addThree = (num) => {
//     return num+3
// }

// console.log(addThree(2))

const addThree = (num) => (num+3)

console.log(addThree(2))
