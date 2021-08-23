//13.Array of Multiples
const arrayOfMultiples = (number,multiples) => {
    let result = [];
    if(multiples!==0){
        for(let i=1;i<=multiples;i++){
            result.push(number*i);
        }        
    }
    return result;
}

console.log(arrayOfMultiples(7, 5)) //  [7, 14, 21, 28, 35]