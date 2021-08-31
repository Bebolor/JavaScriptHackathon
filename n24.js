//24.Smallest digits
const smallest = (num) => {
    const minimum = Math.min(...num.toString().split(''));
    const result = num.toString().split('').map((element, index) => [parseInt(element), index] ).filter(element => element[0] === minimum);
    return result.length <= 1 ? result[0] : result;
};
console.log(smallest(261235)); // [ 1, 2 ]
console.log(smallest(5967392)); // [ 2, 6 ]
console.log(smallest(517418)); // [ [ 1, 1 ], [ 1, 4 ] ]
console.log(smallest(467498)); // [ [ 4, 0 ], [ 4, 3 ] ] 
