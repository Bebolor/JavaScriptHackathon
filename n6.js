/* 6. myEach
Define a myEach function that simulates the forEach method on Array.

myEach should be a function that expects an array and a function.

DO NOT USE forEach in the implementation.*/

const myArr = [1,2,3,4,5];

const myEach = (myArray,myfunction) => {
    for(let i=0;i<myArray.length;i++){
        myfunction(myArray[i]);
    }
} 

const multiplyBy2 = number => console.log(number*2);

myEach(myArr,multiplyBy2);
