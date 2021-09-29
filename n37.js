//37. Help Jimi Hendrix
const tuner = currentFrequencies => {
    let correctFrequencies = [329.63,246.94,196.00,146.83,110.00,82.41];
    let currentFrequenciesMetricsOriginal = currentFrequencies.map((frequency,index)=>frequency/correctFrequencies[index]);
    let currentFrequenciesMetrics = currentFrequenciesMetricsOriginal.map(originalFrequency => Math.round(originalFrequency * 100) / 100);
    let results = [];
    currentFrequenciesMetrics.forEach(metrics => {
        if(metrics === 0){
                results.push("X");
        }else if(metrics>0.99 && metrics<1.01){
                results.push("Good");
        }else if(metrics<=0.99 && metrics>0.98){ 
                results.push("+");            
        }else if(metrics>=1.01 && metrics<1.02){ 
            results.push("-");  
        }else{
            if(metrics<=0.98){
                results.push("++");
            }else{
                results.push("--");
            }
        }              
    });
    return results; 
}


console.log(tuner([0, 246.94, 0, 0, 0, 80])) // ["X", "Good", "X", "X", "X", "++"]

console.log(tuner([329, 246, 195, 146, 111, 82])) // ["Good", "Good", "+", "+", "-", "Good" ]

console.log(tuner([329.63, 246.94, 196, 146.83, 110, 82.41])) // ["Good", "Good", "Good", "Good", "Good", "Good"]