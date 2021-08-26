//15. Print the Century

function century (year) {
    return Math.floor((year-1)/100) + 1;
}

console.log(century(999)); // "10th century"
console.log(century(1001)); // "11th century"
console.log(century(2005)); // "21st century"
