var findWordsContaining = function (words, x) {

    let result = [];
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        let word = words[wordIndex];
        for (let charIndex = 0; charIndex < word.length; charIndex++) {
            if (word[charIndex] === x) {
                result.push(wordIndex);
                break;
            }
        }
    }
    return result
};

console.log(findWordsContaining(["leet", "code"], "e"))
