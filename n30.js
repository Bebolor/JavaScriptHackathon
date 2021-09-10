//30. Sort 2D array

const Sort2dArray = (arr) => {
    const inner_length = arr[0].length;
    const flattened = arr.flat().sort();
    const newArray = [];
    while(flattened.length > 0) {
        newArray.push(flattened.splice(0, inner_length));
    }
    return newArray;
};

const array1 = [[4,4,4,4],
                [3,3,3,3],
                [2,2,2,2],
                [1,1,1,1]];

const array2 = [[8,1,4],
                [1,2,3],
                [7,6,2]];

const test1 = Sort2dArray(array1); // [ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ]
const test2 = Sort2dArray(array2); // [ [ 1, 1, 2 ], [ 2, 3, 4 ], [ 6, 7, 8 ] ]
console.log(test1);
console.log(test2);
