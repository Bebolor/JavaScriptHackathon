//36. Enigma
const enigma = {
    a: 'm',
    b: 'a',
    c: 'f',
    d: 'b',
    e: 'c',
    f: 'n',
    g: 'z',
    h: 'w',
    i: 'x',
    j: 'u',
    k: 'p',
    l: 'd',
    m: 'y',
    n: 'q',
    o: 'o',
    p: 'r',
    q: 't',
    r: 'e',
    s: 'v',
    t: 'h',
    u: 'i',
    v: 'j',
    w: 'k',
    x: 'l',
    y: 'g',
    z: 's'
}

const encrypt = (message) => {
    const words = message.split(' ');
    return words.map((word) => {
        return word.split('').map((letter) => { return enigma[letter]}).join('');
    }).join(' ');
};

const decrypt = (encrypted_message) => {
    const words = encrypted_message.split(' ');
    const decrypted = words.map((word) => {
        return word.split('').map((letter) => {
            for (const key in enigma) {
                if (enigma[key] === letter) {
                    return key;
                }
            }
        }).join('');
    }).join(' ');
    return decrypted;
};



console.log(encrypt('attack')) // 'mhhmfp'

console.log(encrypt('fire in the hole')) // 'nxec xq hwc wodc'

console.log(decrypt('x eofp ho bcfegrh mdd hwcvc clcefxvcv')) // 'i rock to decrypt all these exercises'