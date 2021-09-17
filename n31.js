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

const pyramidLongestSlideDown = (pyr) => {
  const slideLength = 0;
  const slidePath = [];
  for (let i = 0; i < pyr.length; i++) {}
};

pyramidLongestSlideDown(pyramid1);
// Slide length: 20
// Slide path: [ 2 -> 8 -> 3 -> 7 ]
pyramidLongestSlideDown(pyramid2);
// Slide length: 40
// Slide path: [ 2 -> 6 -> 9 -> 8 -> 6 -> 9 ]