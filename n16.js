//16. Loves Me, Loves Me Not…
const lovesMe = n => {
    if(n !==0){
        let loveTruth = [];
        
        for(let i=0;i<n;i++){  
            loveTruth.push(i%2===0?"Loves me" :"Loves me not");
        }
        loveTruth[n-1] = loveTruth[n-1].toUpperCase();
        return loveTruth.join(", ");
    }
}


console.log(lovesMe(3)) // "Loves me, Loves me not, LOVES ME"
console.log(lovesMe(6)) // "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
console.log(lovesMe(1)) // "LOVES ME"



