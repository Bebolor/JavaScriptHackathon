//11. Min, Max, Length and Average


function minMaxLengthAverage(arr) {
    let lowNum = arr[0];
    let highNum = arr[0];
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (lowNum > arr[i]) {
            lowNum = arr[i];
        }
        if ( highNum < arr[i]) {
            highNum = arr[i];
        }
        sum += arr[i];
    }
    let ave = sum / arr.length;
    let finalArray = [lowNum, highNum, arr.length,ave]
    return finalArray;
};

console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // [ 3, 100, 5, 40 ]
