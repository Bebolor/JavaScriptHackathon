//24.Smallest digits
const smallest = (num) => {
    const minimum = Math.min(...num.toString().split(''));
    const result = num.toString().split('').map((element, index) => [parseInt(element), index] ).filter(element => element[0] === minimum);
    return result.length <= 1 ? result[0] : result;
};
console.log(smallest(261235)); 
console.log(smallest(5967392));
console.log(smallest(517418)); 
console.log(smallest(467498));  
