// 25. Break Up Camel Case …
const breakUpCamelCase = (string) =>string.replace(/([A-Z])/g, " $1");

console.log(breakUpCamelCase('breakUpCamelCase')); // break Up Camel Case
console.log(breakUpCamelCase('fullStackProgram'));  // full Stack Program