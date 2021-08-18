// 2. The echo

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
// Yodelayheeeeehooo
// Yodelayheeeeeho
// Yodelayheeeee  
// Yodelayheee    
// Yodelayhe      
// Yodelay        
// Yodel
// Yod
// Y