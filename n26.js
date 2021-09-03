// 26. … then create Camel Case
const camelizeIt = (str) => {
    str = str.replace(/_/g," "); 
    let strCopy = str.split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.substring(1))
    .join('');
    return strCopy.charAt(0).toLowerCase() + strCopy.substring(1)
}
console.log(camelizeIt("Hello World")); // "helloWorld"
console.log(camelizeIt("hackathon_rocks")); // "hackathonRocks"
console.log(camelizeIt("Learning convention at Propulsion")); // "learningConventionAtPropulsion"
console.log(camelizeIt("hackathon rocks!")); // "hackathonRocks!"

