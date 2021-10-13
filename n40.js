//40. Sort you contacts
const sortContacts = (array, order) => {
    if(!array) return [];
    if(!order) return "Please choose how to sort your contacts";

    return array.sort((element1, element2) => {
        const last1 = element1.split(' ')[1];
        const last2 = element2.split(' ')[1];
        return ((order === "ASC") ? (last1 > last2 ? 1 : -1) : (last1 < last2 ? 1 : -1))
    });  
}

console.log(sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
], "ASC"))
// ['Captain America','Bat Girl','Bat Man','Albert Musketeer','Dean Rouflaquette']

console.log(sortContacts([
    "Boutros Boutros-Ghali",
    "Kofi Annan",
    "Ban Ki-moon",
    "António Guterres"
], "DESC"))
// ['Ban Ki-moon','António Guterres','Boutros Boutros-Ghali','Kofi Annan']

console.log(sortContacts([], "DESC")) // []

console.log(sortContacts(null, "DESC")) // []

console.log(sortContacts(undefined, "DESC")) // []

console.log(sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
])) // "Please choose how to sort your contacts"