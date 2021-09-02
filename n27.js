//27. Remember Nokia 3310 ?
const oldPhoneConvert = (code) => {
    const arr = [[0, 0], [1, 1], ['ABC', 2], ['DEF', 3], ['GHI', 4], ['JKL', 5], ['MNO', 6], ['PQRS', 7], ['TUV', 8], ['WXYZ', 9]];
    let result = [];
    const splitted = code.split('');
    splitted.forEach(letter => {
        arr.forEach(element => {
            if (element[0].toString().includes(letter.toString())) { 
                result.push(element[1]); }
        });
    });
    return result.join('');
};

console.log(oldPhoneConvert("0GGKVJ1T1I")); // 0445851814
console.log(oldPhoneConvert("0HITZEGKFU"));// 0448934538
