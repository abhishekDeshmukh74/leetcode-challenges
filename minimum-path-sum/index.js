// Recursive way(Top-down)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var minPathSum = function (grid) {
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill())

    const dfs = (i, j) => {
        if (i < 0 || j < 0) return Infinity;
        if (dp[i][j]) return dp[i][j];

        if (i === 0 && j === 0) return grid[0][0];

        return dp[i][j] = grid[i][j] + Math.min(dfs(i - 1, j), dfs(i, j - 1))
    }
    return dfs(grid.length - 1, grid[0].length - 1)
}

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var minPathSum = function (grid) {
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill());

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            } else {
                const up = i > 0 ? dp[i - 1][j] : Infinity;
                const left = j > 0 ? dp[i][j - 1] : Infinity;
                dp[i][j] = grid[i][j] + Math.min(up, left);
            }
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
}

// Iterative/tabular way(Bottom-up) 1D space optimization
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var minPathSum = function (grid) {
    let prev = Array(grid.length[0]).fill();

    for (let i = 0; i < grid.length; i++) {
        const current = Array(grid.length[0]).fill()

        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                current[j] = grid[i][j];
            } else {
                const up = i > 0 ? prev[j] : Infinity;
                const left = j > 0 ? current[j - 1] : Infinity;
                current[j] = grid[i][j] + Math.min(up, left);
            }
        }
        prev = current
    }
    return prev[grid[0].length - 1];
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))
console.log(minPathSum([[1]]))
