// 7. myMap

const myArr = [1,2,3,4,5];

const multiplyBy2 = number => number*2; 

const myMap = (myArray,myFunction) => {
    let newArray = [];
    for(let i=0;i<myArray.length;i++){
        newArray.push(myFunction(myArray[i]))
    }
    return newArray;
}

console.log(myMap(myArr,multiplyBy2));
