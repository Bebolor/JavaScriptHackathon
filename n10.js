//10. Invert


function invert(obj) {
    let invertObj = {};
    for (const key in obj) {
        invertObj[obj[key]] = key;
    }
    return invertObj;
};
console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }
