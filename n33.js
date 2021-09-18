//33. Check the Full

const full = (arr) => {
    const sorted = arr.sort();
    return (sorted[0] === sorted[2] && sorted[3] === sorted[4]) ||
        (sorted[0] === sorted[1] && sorted[2] === sorted[4]);
};

console.log(full([6,6,6,4,4])); // true

console.log(full([3,2,3,2,3])); // true

console.log(full([1,2,2,3,6])); // false