// const map = new Map()
// map.set('EN',"English");
// map.set('FR',"French");
// map.set('JN',"Japanese");
// map.set('EN',"English");

// for (const items of map) {
//     console.log(items);
// }

// for (const [keys,values] of map) {
//     console.log(`${keys} : ${values}`);
// }

// const language = ["English", "French", "Japanese", "Hindi"];
// for (const lang of language) {
//     console.log(lang);
    
// }


//forOf cannot be used on Objects
// const language = {
//     EN : "English",
//     FR : "French",
//     JN : "Japanese",
// }

// for (const lang of language) {
//     console.log(lang);
    
// }

const language = [
    {
        languageCode: "EN",
        languageName: "English"
    },
    {
        languageCode: "FR",
        languageName: "French"
    },
    {
        languageCode: "JN",
        languageName: "Japanese"
    },
]

for (const lang of language) {
    console.log(lang.languageCode);
    console.log(lang.languageName);
    console.log(lang);
    
}