var minDistance = (word1, word2) => {
    const dp = Array(word1.length).fill().map(() => Array(word2.length).fill())

    const dfs = (i, j) => {
        if (i === -1) return j + 1
        if (j === -1) return i + 1

        if (dp[i][j] !== undefined) return dp[i][j]

        if (word1[i] === word2[j]) return dp[i][j] = dfs(i - 1, j - 1)

        //                                 insert         delete         replace
        return dp[i][j] = 1 + Math.min(dfs(i, j - 1), dfs(i - 1, j), dfs(i - 1, j - 1))
    }
    return dfs(word1.length - 1, word2.length - 1)
};

var minDistance = (word1, word2) => {
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0))

    for (let i = 0; i <= word1.length; i++) dp[i][0] = i
    for (let j = 0; j <= word2.length; j++) dp[0][j] = j

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
            }
        }
    }
    return dp[word1.length][word2.length]
};

var minDistance = (word1, word2) => {
    let prev = Array(word2.length + 1).fill(0)
    const current = Array(word2.length + 1).fill(0)

    for (let j = 0; j <= word2.length; j++) prev[j] = j

    for (let i = 1; i <= word1.length; i++) {
        current[0] = i;
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                current[j] = prev[j - 1]
            } else {
                current[j] = 1 + Math.min(current[j - 1], prev[j], prev[j - 1])
            }
        }
        prev = [...current]
    }
    return prev[word2.length]
};

console.log(minDistance('horse', 'ros'))
console.log(minDistance('intention', 'execution'))
console.log(minDistance('dinitrophenylhydrazine', 'benzalphenylhydrazone'))
console.log(minDistance('', 'a'))
