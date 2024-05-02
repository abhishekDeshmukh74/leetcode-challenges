var checkIfPangram = function (sentence) {
    if (sentence.length < 26) return false
    return new Set(sentence).size === 26
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))
