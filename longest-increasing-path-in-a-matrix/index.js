// DFS + Memoization
// Time complexity: O(mn)
// Space complexity: O(mn)

var longestIncreasingPath = function (matrix) {
    if (!matrix?.length) return 0

    const memo = {}

    const dfs = function (i, j, prevValue) {

        if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) return 0
        if (matrix[i][j] <= prevValue) return 0

        const key = `${i}-${j}`
        if (memo[key]) return memo[key]

        const down = dfs(i + 1, j, matrix[i][j]);
        const top = dfs(i - 1, j, matrix[i][j]);
        const right = dfs(i, j + 1, matrix[i][j]);
        const left = dfs(i, j - 1, matrix[i][j]);
        memo[key] = 1 + Math.max(top, down, left, right)
        return memo[key]
    }

    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            max = Math.max(max, dfs(i, j, -1))
        }
    }
    return max;
};

console.log(longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]))
