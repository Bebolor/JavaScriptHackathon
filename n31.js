// 31. Pyramid Longest Slide Down

const pyramid1 = [[2],
                 [8, 6],
                [1, 3, 5],
               [4, 7, 3, 8]];

//    /2/
//   \8\ 6
//  1 \3\ 5
// 4 /7/ 3 8

const pyramid2 = [[2],
                [6, 2],
               [1, 9, 8],
              [4, 8, 3, 5],
             [9, 6, 4, 5, 2],
            [8, 5, 9, 3, 7, 1]];

//      /2/
//     \6\ 2
//    1 \9\ 8
//   4 /8/ 3 5
//  9 \6\ 4 5 2
// 8 5 \9\ 3 7 1

const pyramidLongestSlideDown = (pyra) => {
    let pathLength = 0;
    let path = 'Slide path: [';
    let maxValue = 0;
    let lastMaxIndex;

    pyra.forEach(stage => {
        if (stage.length <= 1) {
            maxValue = Math.max(...stage);
            pathLength += maxValue;
            path += ` ${maxValue} `;
        } else {
            maxValue = Math.max(...stage.slice(lastMaxIndex, lastMaxIndex + 2));
            pathLength += maxValue;
            path += `-> ${maxValue} `;
        }
        lastMaxIndex = stage.indexOf(maxValue);
    });
    path += ']';
    return `Slide length: ${pathLength}\r\n${path}`;
};

console.log(pyramidLongestSlideDown(pyramid1));
// Slide length: 20
// Slide path: [ 2 -> 8 -> 3 -> 7 ]
console.log(pyramidLongestSlideDown(pyramid2));
// Slide length: 40
// Slide path: [ 2 -> 6 -> 9 -> 8 -> 6 -> 9 ]