//Map is not iterable so no output
// const map = new Map()
// map.set('EN',"English");
// map.set('FR',"French");
// map.set('JN',"Japanese");
// map.set('EN',"English");

// for (const items in map) {
//     console.log(items);
// }

// const language = ["English", "French", "Japanese", "Hindi"];
// for (const lang in language) {
//     console.log(lang);
//     console.log(language[lang]);
// }


// const language = {
//     EN : "English",
//     FR : "French",
//     JN : "Japanese",
// }

// for (const lang in language) {
//     console.log(lang);
//     console.log(language[lang]);
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

for (const lang in language) {
    console.log(lang);
    console.log(language[lang].languageName);
    console.log(language[lang].languageCode);
}