//8. myFilter

const myArr = [1,2,3,4,5];

const myFilter = (myArray,myFunction)=>{
    let newArray = [];
    for(let i=0;i<myArray.length;i++){
        if(myFunction(myArray[i])){
            newArray.push(myArray[i])
        }
    }
    return newArray;
}

const checkEven = numb => numb%2===0;

console.log(myFilter(myArr,checkEven));
console.log(myArr);

