// Recursive
// Time complexity: O(M⋅N). Solving each subproblem has a cost of O(1). There are M⋅N subproblems, and so we get a total time complexity of O(M⋅N)
// Space complexity: O(M⋅N) as we need to store the answer for each of the M⋅N subproblems.

// var longestCommonSubsequence = function (text1, text2) {

//     const memo = {};

//     var dfs = function (i = 0, j = 0) {

//         if (text1.length === 0 || text2.length === 0) return 0
//         if (i >= text1.length || j >= text2.length) return 0

//         const key = `${i}-${j}`
//         if (key in memo) return memo[key]

//         if (text1[i] === text2[j]) {
//             memo[key] = 1 + dfs(i + 1, j + 1)
//         } else {
//             memo[key] = Math.max(
//                 dfs(i + 1, j),
//                 dfs(i, j + 1)
//             )
//         }
//         return memo[key]
//     };
//     return dfs(0, 0);
// };

// Iterative
// Time complexity: O(M⋅N). We're solving M⋅N subproblems. Solving each subproblem is an O(1) operation.
// Space complexity: O(M⋅N). We'e allocating a 2D array of size M⋅N to save the answers to subproblems.

var longestCommonSubsequence = function (text1, text2) {

    const table = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0))

    for (let i = 1; i <= text1.length; i++) {

        for (let j = 1; j <= text2.length; j++) {

            if (text1[i - 1] === text2[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
            }
        }
    }
    return table[text1.length][text2.length]
};

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'def'))
console.log(longestCommonSubsequence('lmrejgzsbqpkdonytkbknstsxifofmrktcpq', 'hklcrebcjipetgnmlqvijovmlgripwratarmt'))
console.log(longestCommonSubsequence('opmtqvejqvudezchsloxizynabehqbyzknunobehkzqtkt', 'srwbovohkvqhwrwvizebsrszcxepqrenilmvadqxuncpwhe'))
