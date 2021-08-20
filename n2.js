/*2. The echo
Write a function that returns the same sentence minus two letters until only the first letter is left. Use recursion.

Example:

const yodel = "Yodelayheeeeehooooo";

checkEcho(yodel); // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"*/

function checkEcho(str) {
    if (str.length === 0) {
    return '';
    } else {
        str = str.slice(0, -2);
        console.log(str);
        checkEcho(str);
    }
    
}
    
const yodel = "Yodelayheeeeehooooo";
console.log(checkEcho(yodel)); 
