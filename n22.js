//22. 22. Hashtags Generator
function hashtagsGenerator(string) {
  let wordArray = string.split(" ").filter((char) => char !== ""); // It makes each string with spaces in different strings wihtout spaces, in an array
  let hashtagReturn = ["#"];

  if (wordArray.length === 0) {
    //console.log("No word, it is empty");
    return false;
  } else {
    for (let i = 0; wordArray.length > i; i++) {
      hashtagReturn.push(
        wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
      );
      // concatenates the first letter in capital with the rest of the string.
    }
    return hashtagReturn.join("");
  }
}

console.log(hashtagsGenerator("the   famous   hello   world   ")); // #TheFamousHelloWorld
console.log(hashtagsGenerator("javaScript rocks")); // #JavaScriptRocks
console.log(hashtagsGenerator("Propulsion Academy Students Are Amazing")); // #PropulsionAcademyStudentsAreAmazing
console.log(hashtagsGenerator(""));
