// Recursive
// Time complexity: O(M⋅N). Solving each subproblem has a cost of O(1). There are M⋅N subproblems, and so we get a total time complexity of O(M⋅N)
// Space complexity: O(M⋅N) as we need to store the answer for each of the M⋅N subproblems.

// var longestPalindromeSubseq = function (s, t = s.split('').reverse().join('')) {
//     const memo = {};
//     const lcs = (i, j) => {

//         if (i >= s.length || j >= t.length) return 0
//         if (s.length === 0 || t.length === 0) return 0

//         const key = `${i}-${j}`
//         if (key in memo) return memo[key]

//         if (s[i] === t[j]) {
//             memo[key] = 1 + lcs(i + 1, j + 1)
//         } else {
//             memo[key] = Math.max(lcs(i + 1, j), lcs(i, j + 1))
//         }
//         return memo[key]
//     }
//     return lcs(0, 0)
// };

// Iterative
// Time complexity: O(M⋅N). We're solving M⋅N subproblems. Solving each subproblem is an O(1) operation.
// Space complexity: O(M⋅N). We'e allocating a 2D array of size M⋅N to save the answers to subproblems.

var longestPalindromeSubseq = function (s, t = s.split('').reverse().join('')) {

    const table = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0))

    for (let i = 1; i <= s.length; i++) {

        for (let j = 1; j <= t.length; j++) {

            if (s[i - 1] === t[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
            }
        }
    }
    return table[s.length][t.length]
};

console.log(longestPalindromeSubseq('bbbab'))
