//44. Spanish conjugation

const spanishConj = verb => {
    const pronouns = ['Yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    const ends = {
        ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
        ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
        er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    }
    const form = verb.substr(-2);
    const stem = verb.substr(0, verb.length - 2);
    return pronouns.reduce((result, pronoun, index) => {
    return `${result}${pronoun} ${stem}${ends[form][index]}${
        index === pronouns.length - 1 ? '.' : ', '}`;
    }, '');
}

console.log(spanishConj("pasar")); // "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

console.log(spanishConj("unir")); // "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

console.log(spanishConj("correr")); // "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
