// Recursive
// Time complexity: O(M⋅N). Solving each subproblem has a cost of O(1). There are M⋅N subproblems, and so we get a total time complexity of O(M⋅N)
// Space complexity: O(M⋅N) as we need to store the answer for each of the M⋅N subproblems.

var longestCommonSubsequence = function (text1, text2) {

    if (text1.length === 0 || text2.length === 0) return 0
    const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill())

    var dfs = function (i, j) {
        if (i < 0 || j < 0) return 0

        if (dp[i][j] !== undefined) return dp[i][j]

        if (text1[i] === text2[j]) return dp[i][j] = 1 + dfs(i - 1, j - 1)
        return dp[i][j] = Math.max(dfs(i - 1, j), dfs(i, j - 1))
    };
    return dfs(text1.length - 1, text2.length - 1);
};

// Iterative
// Time complexity: O(M⋅N). We're solving M⋅N subproblems. Solving each subproblem is an O(1) operation.
// Space complexity: O(M⋅N). We'e allocating a 2D array of size M⋅N to save the answers to subproblems.
var longestCommonSubsequence = function (text1, text2) {

    if (text1.length === 0 || text2.length === 0) return 0
    const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0))

    for (let i = 1; i <= text1.length; i++) {

        for (let j = 1; j <= text2.length; j++) {

            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[text1.length][text2.length]
};

// Iterative - 1D space optimization
var longestCommonSubsequence = function (text1, text2) {

    if (text1.length === 0 || text2.length === 0) return 0
    let prev = Array(text2.length + 1).fill(0)

    for (let i = 1; i <= text1.length; i++) {
        let current = Array(text2.length + 1).fill(0)

        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                current[j] = 1 + prev[j - 1]
            } else {
                current[j] = Math.max(prev[j], current[j - 1])
            }
        }
        prev = current
    }
    return prev[text2.length]
};

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'def'))
console.log(longestCommonSubsequence('abcba', 'abcbcba'))
console.log(longestCommonSubsequence('lmrejgzsbqpkdonytkbknstsxifofmrktcpq', 'hklcrebcjipetgnmlqvijovmlgripwratarmt'))
console.log(longestCommonSubsequence('opmtqvejqvudezchsloxizynabehqbyzknunobehkzqtkt', 'srwbovohkvqhwrwvizebsrszcxepqrenilmvadqxuncpwhe'))
