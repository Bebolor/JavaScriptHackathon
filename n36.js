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

encrypt('attack') // 'mhhmfp'

encrypt('fire in the hole') // 'nxec xq hwc wodc'

decrypt('x eofp ho bcfegrh mdd hwcvc clcefxvcv') // 'i rock to decrypt all these exercises'