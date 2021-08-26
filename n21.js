//21. Help me finish my words …
function wordHelper(letters, word) {
  let firstLetter = letters.charAt(0);
  if (word.includes(firstLetter)) {
    //console.log('firstLettter: ' + firstLettter + ' String ' + word);
    if (letters.length - 1 === 0 || word.length - 1 === 0) {
      // return true;
      console.log("true");
    } else {
      wordHelper(
        letters.replace(firstLetter, ""),
        word.replace(firstLetter, "")
      );
    }
  } else {
    //return false;
    console.log("false");
  }
}

wordHelper("bbece", "barbecue"); // True

wordHelper("bbecce", "barbecue"); // False

wordHelper("bdg", "butterfly"); // False
