// 38. Get all the pairs

const allPairs = (args, sum) => {
    let result = [];
    for (let i = 0; i < args.length; i++)
    {
        for (let j = i; j < args.length; j++)
        {
            if (args[i] + args[j] === sum) {
                if (args[i] < args[j]) result.push([args[i], args[j]]);
                else result.push([args[j], args[i]]);
            };
        }
    }
    return result.sort((a, b) => a[0] - b[0]);
}

console.log(allPairs([2, 4, 5, 3], 7)) // [[2, 5], [3, 4]]
// 2 + 5 = 7 and 3 + 4 = 7

console.log(allPairs([5, 3, 9, 2, 1], 3)) // [[1, 2]]

console.log(allPairs([4, 5, 1, 3, 6, 8], 9)) // [[1, 8], [3, 6], [4, 5]]