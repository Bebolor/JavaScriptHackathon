// 42. Remove Wovel 
const killLastVowel = (phrase) => {
    return phrase.split(' ').map(word => {
        const position = Math.max(word.lastIndexOf('a'), word.lastIndexOf('e'), word.lastIndexOf('i'), word.lastIndexOf('o'), word.lastIndexOf('u'),
        word.lastIndexOf('A'), word.lastIndexOf('E'), word.lastIndexOf('I'), word.lastIndexOf('O'), word.lastIndexOf('U'));
        if (position !== -1) {
            return word.substring(0, position) + word.substring(position + 1);
        }
    }).join(' ');
};

console.log(killLastVowel("Propulsion is a great place to get headache."));
// "Propulsin s  gret plac t gt headach."
console.log(killLastVowel("I love Javascript so much."));
// " lov Javascrpt s mch."

