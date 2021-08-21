//9. Merge

const merge = (...objects) =>{
    let returnObject = {};
    objects.forEach(object => {
        for(key in object){
            if(!returnObject[key]){
                returnObject[key] = object[key];
            }
        }
    });
    return returnObject;
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 } 
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
