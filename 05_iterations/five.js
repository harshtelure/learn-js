// coding = ["Java", "Python", "Cpp", "Javascript"]

// coding.forEach((language) => {
//     console.log(language);
// });

// coding.forEach(function(language) {
//     console.log(language);
// });

// function printLanguage(language) {
//     console.log(language);
// }
// coding.forEach(printLanguage);

// coding.forEach((language,postion,coding) => {
//     console.log(`${language}'s index is ${postion} for Array: [ ${coding} ]`);
    
// });

coding = [
    {
        languageName: "Java",
        fileName: "java",
    },
    {
        languageName: "Python",
        fileName: "py",
    },
    {
        languageName: "Javascript",
        fileName: "js",
    },
    {
        languageName: "C++",
        fileName: "cpp",
    },
]

coding.forEach( (language) =>{
    console.log(language.languageName);
    console.log(language.fileName);
})