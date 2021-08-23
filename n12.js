//12. Word count
function wordCount(str) {
    let wordArray = str.split(" ");
    if (wordArray.length > 30) {
        let array30 = wordArray.slice(0, 29);
        let str30 = array30.join(" ");
        console.log(`ERROR: you wrote ${wordArray.length} words. ${str30}`);
    } else {
        console.log(wordArray.length);
    }
};
wordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery"); // 24
wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu") // ERROR: you wrote 33 words. We only can accept the following words: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ―"
