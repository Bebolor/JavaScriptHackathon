//40. Sort you contacts
sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
], "ASC")
// ['Captain America','Bat Girl','Bat Man','Albert Musketeer','Dean Rouflaquette']

sortContacts([
    "Boutros Boutros-Ghali",
    "Kofi Annan",
    "Ban Ki-moon",
    "António Guterres"
], "DESC")
// ['Ban Ki-moon','António Guterres','Boutros Boutros-Ghali','Kofi Annan']

sortContacts([], "DESC") // []

sortContacts(null, "DESC") // []

sortContacts(undefined, "DESC") // []

sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
]) // "Please choose how to sort your contacts"