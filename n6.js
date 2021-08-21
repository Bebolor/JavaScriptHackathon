// 6. myEach

const myArr = [1,2,3,4,5];

const myEach = (myArray,myfunction) => {
    for(let i=0;i<myArray.length;i++){
        myfunction(myArray[i]);
    }
} 

const multiplyBy2 = number => console.log(number*2);

myEach(myArr,multiplyBy2);
