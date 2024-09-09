// Recursive
// Time complexity: O(M⋅N). Solving each subproblem has a cost of O(1). There are M⋅N subproblems, and so we get a total time complexity of O(M⋅N)
// Space complexity: O(M⋅N) as we need to store the answer for each of the M⋅N subproblems.
var longestPalindromeSubseq = function (s, t = s.split('').reverse().join('')) {
    if (s.length === 0 || t.length === 0) return 0

    const dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill())

    const lcs = (i, j) => {
        if (i < 0 || j < 0) return 0

        if (dp[i][j] !== undefined) return dp[i][j]

        if (s[i] === t[j]) {
            return dp[i][j] = 1 + lcs(i - 1, j - 1)
        } else {
            return dp[i][j] = Math.max(lcs(i - 1, j), lcs(i, j - 1))
        }
    }
    return lcs(s.length - 1, s.length - 1)
};

// Iterative
// Time complexity: O(M⋅N). We're solving M⋅N subproblems. Solving each subproblem is an O(1) operation.
// Space complexity: O(M⋅N). We're allocating a 2D array of size M⋅N to save the answers to subproblems.
var longestPalindromeSubseq = function (s, t = s.split('').reverse().join('')) {
    const dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0))

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[s.length][t.length]
};

// Iterative
// Time complexity: O(M⋅N). We're solving M⋅N subproblems. Solving each subproblem is an O(1) operation.
// Space complexity: O(N). We're allocating a 2D array of size M⋅N to save the answers to subproblems.
var longestPalindromeSubseq = function (s, t = s.split('').reverse().join('')) {
    let prev = Array(t.length + 1).fill(0)

    for (let i = 1; i <= s.length; i++) {
        const current = Array(t.length + 1).fill(0)
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                current[j] = 1 + prev[j - 1]
            } else {
                current[j] = Math.max(prev[j], current[j - 1])
            }
        }
        prev = current
    }
    return prev[t.length]
};

console.log(longestPalindromeSubseq('bbbab'))
console.log(longestPalindromeSubseq('cbbd'))
