var minDistance = function (word1, word2) {
    const table = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0))

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
            }
        }
    }

    return word1.length + word2.length - 2 * table[word1.length][word2.length]
};
console.log(minDistance('sea', 'eat'))
