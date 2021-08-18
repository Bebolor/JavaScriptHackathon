//1. Fake news
function fakeNews(word) {
    let countFalse = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === false) {
            countFalse += 1;
        }
    }
    console.log(`There is ${countFalse} fake news !`);
}
const news = [true, false, false, true, false, false, false, true, true, true];
fakeNews(news); // "There is 5 fake news !"
