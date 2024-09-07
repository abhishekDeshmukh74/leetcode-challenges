// Recursive way(Top-down)
// Time complexity: O(N×M×M)
// Space complexity: O(N×M×M)
var cherryPickup = function (grid) {
    const dp = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill()
            .map(() => Array(grid[0].length).fill()))

    const dfs = (i, j1, j2) => {
        if (j1 < 0 || j2 < 0 || j1 >= grid[0].length || j2 >= grid[0].length) return -Infinity;

        if (i === grid.length - 1) {
            return j1 === j2 ? grid[i][j1] : grid[i][j1] + grid[i][j2];
        }

        if (dp[i][j1][j2] !== undefined) return dp[i][j1][j2]

        let maxSum = -Infinity
        for (let dj1 = -1; dj1 <= 1; dj1++) {
            for (let dj2 = -1; dj2 <= 1; dj2++) {
                let sum = 0;
                sum += (j1 === j2) ? grid[i][j1] : grid[i][j1] + grid[i][j2];
                sum += dfs(i + 1, j1 + dj1, j2 + dj2);
                maxSum = Math.max(maxSum, sum);
            }
        }
        return dp[i][j1][j2] = maxSum
    }
    return dfs(0, 0, grid[0].length - 1)
};

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N×M×M)
// Space complexity: O(N×M×M)
var cherryPickup = function (grid) {
    const dp = Array(grid.length).fill()
        .map(() => Array(grid[0].length).fill()
            .map(() => Array(grid[0].length).fill()));

    for (let j1 = 0; j1 < grid[0].length; j1++) {
        for (let j2 = 0; j2 < grid[0].length; j2++) {
            dp[grid.length - 1][j1][j2] = j1 === j2
                ? grid[grid.length - 1][j1]
                : grid[grid.length - 1][j1] + grid[grid.length - 1][j2];
        }
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        for (let j1 = grid[0].length - 1; j1 >= 0; j1--) {
            for (let j2 = grid[0].length - 1; j2 >= 0; j2--) {
                let maxSum = -Infinity
                for (let dj1 = -1; dj1 <= 1; dj1++) {
                    for (let dj2 = -1; dj2 <= 1; dj2++) {
                        let newJ1 = j1 + dj1;
                        let newJ2 = j2 + dj2;

                        if (newJ1 < 0 || newJ2 < 0 || newJ1 >= grid[0].length || newJ2 >= grid[0].length) continue;

                        let sum = (j1 === j2) ? grid[i][j1] : grid[i][j1] + grid[i][j2];
                        sum += dp[i + 1][newJ1][newJ2];
                        maxSum = Math.max(maxSum, sum);
                    }
                }
                dp[i][j1][j2] = maxSum
            }
        }
    }
    return dp[0][0][grid[0].length - 1]
};

// Iterative/tabular way(Bottom-up) 2D space optimization
// Time complexity: O(N×M×M)
// Space complexity: O(N×M×M)
var cherryPickup = function (grid) {

    let prev = Array(grid[0].length).fill().map(() => Array(grid[0].length).fill(0));

    for (let j1 = 0; j1 < grid[0].length; j1++) {
        for (let j2 = 0; j2 < grid[0].length; j2++) {
            prev[j1][j2] = j1 === j2
                ? grid[grid.length - 1][j1]
                : grid[grid.length - 1][j1] + grid[grid.length - 1][j2];
        }
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        let current = Array(grid[0].length).fill().map(() => Array(grid[0].length).fill(0));

        for (let j1 = grid[0].length - 1; j1 >= 0; j1--) {
            for (let j2 = grid[0].length - 1; j2 >= 0; j2--) {
                let maxSum = -Infinity
                for (let dj1 = -1; dj1 <= 1; dj1++) {
                    for (let dj2 = -1; dj2 <= 1; dj2++) {
                        let newJ1 = j1 + dj1;
                        let newJ2 = j2 + dj2;

                        if (newJ1 < 0 || newJ2 < 0 || newJ1 >= grid[0].length || newJ2 >= grid[0].length) continue;

                        let sum = (j1 === j2) ? grid[i][j1] : grid[i][j1] + grid[i][j2];
                        sum += prev[newJ1][newJ2];
                        maxSum = Math.max(maxSum, sum);
                    }
                }
                current[j1][j2] = maxSum
            }
        }
        prev = current
    }
    return prev[0][grid[0].length - 1]
};

console.log(cherryPickup([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]]))
console.log(cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]]))
