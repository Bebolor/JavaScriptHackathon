/*10. Invert
invert takes an object as a parameter. It returns a new object with the values of the passed object as properties and the keys as values of those properties.

Example:

invert({ a: 3, b: 2 }); // { 2: 'b', 3: 'a' } */

function invert(obj) {
    let invertObj = {};
    for (const key in obj) {
        invertObj[obj[key]] = key;
    }
    return invertObj;
};
console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }
