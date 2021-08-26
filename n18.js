// 18. Adding a Function to the String Prototype
function swapCase(str) {
    let upArray = ["A", "B", "C", "D", "E", "F", "G", "E", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let swapStr = [];
    for (i = 0; i < str.length; i++) {
        if (upArray.includes(str[i])) {
            swapStr.push(str[i].toLowerCase());
        } else {
            swapStr.push(str[i].toUpperCase());
        }
    }
    return swapStr.join("");
}



console.log(swapCase("Hello")); // "hELLO"
console.log(swapCase("aBcD")); // "aBcD"
