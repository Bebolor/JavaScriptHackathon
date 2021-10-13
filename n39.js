//39. Don’t worry, be happy ?

const happyOrNot = (number) => {
    const array = number.toString().split('').map(x => parseInt(x));
    let sum = 0;
    let result = false;
    const total = array.forEach(x => {
        return sum += Math.pow(x, 2);
    });
    if (sum >= 10) {
        result = happyOrNot(sum);
        if (result) {
            return true;
        } else {
            return false;
        }
    } else {
        if (sum === 1) {
            result = true;
            return true;
        } else {
            return false;
        }
    }
};

console.log(happyOrNot(19)) // true
// because 19 >> 1^2 + 9^2 = 82 >> 8^2 + 2^2 = 68 >> 6^2 + 8^2 = 100 >> 1^2 + 0^2 + 0^2 = 1
// We reached 1 meaning that 19 is a Happy Number.

console.log(happyOrNot(203)) // true
console.log(happyOrNot(11)) // false
console.log(happyOrNot(107)) // false