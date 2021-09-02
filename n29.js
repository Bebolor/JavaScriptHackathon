// 29. Mistigri
const mistigri = (str) => {
    let splitStr = str.toString().split('');
    if (splitStr.includes('6')) return 'Mistigri';
    else return 'No Mistigri here';
}


console.log(mistigri([3,2,1,6])); // Mistigri !

console.log(mistigri([3,9,8,7,1])); // No Mistigri here

console.log(mistigri([36,43,29])) // Mistigri !
