const firstName="Harsh";
const surName="Telure";

//console.log(firstName+" "+surName+" is a Student."); //bad practice 

console.log(`${firstName} ${surName} is a Student.`);

const fullName = new String("Harsh Telure");
console.log(fullName);
console.log(fullName[5]);
console.log(fullName.__proto__);

console.log(fullName.length);
console.log(fullName.charAt(4));
console.log(fullName.indexOf('a'));
console.log(fullName.replace(" ","-"));
console.log(fullName.toLowerCase());
console.log(fullName.split(" "));

console.log(fullName.trim());
console.log(fullName.trimStart());
console.log(fullName.trimStart());

console.log(fullName.substring(6,12));
console.log(fullName.slice(5,-1));
console.log(fullName.endsWith("e"));




