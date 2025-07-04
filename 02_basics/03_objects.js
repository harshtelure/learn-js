
const mykey = Symbol("key");

const JsUser = {
    firstName : "Harsh",
    age: 20,
    [mykey]: "harsh",
}

// console.log(JsUser);

// JsUser.age=21;

// console.log(JsUser);

// Object.freeze(JsUser)
// JsUser.firstName = "Nakul";

console.log(JsUser);

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));

JsUser.greetings = function() {
    console.log(`Hello ${this.firstName}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings);