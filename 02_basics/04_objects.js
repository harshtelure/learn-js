// const user = new Object();
// const user = {}

// user.name = "Harsh";
// user.id = "harsh753";
// user.age = 21;
// user.isStudent = true;



// const user = {
//     name: {
//         first: "Harsh",
//         last: "Telure",
//     },
//     id: {
//         username: "harsh",
//         prn: 22210267,
//     },
//     age: {
//         dob: {
//             month: "October",
//             day: 11,
//             year: 2004,
//         },
//     },
//     isStudent: true,
// }

// console.log(user);

// console.log(user.name.middle);

// user.name.middle = "Mukesh";

// console.log(user.name.middle);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// const name = {
//     first: "Harsh",
//     last: "Telure",
//     }

// const dob =  {
//     month: "October",
//     day: 11,
//     year: 2004,
// }

// const user = {name, dob}

// const user = Object.assign(name, dob);

// const user = ({}, name, dob);

// const user = {...name, ...dob};

// console.log(user);
// console.log(name);
// console.log(dob);

const user = [
    {
        name: "Harsh",
        id: "harsh",
        age: 21,
    },
    {
        name: "Manoj",
        id: "manoj",
        age: 22,
    },
]

// console.log(user);
// console.log(user[1].name);
// console.log(user[0].age);
// console.log(Object.entries(user[0]));

const { name : n} = user[1];
console.log(n);
