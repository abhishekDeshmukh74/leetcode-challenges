// Recursive way(Top-down)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var uniquePathsWithObstacles = function (obstacleGrid) {

    const dp = Array(obstacleGrid.length).fill().map(() => Array(obstacleGrid[0].length).fill())

    const dfs = (i, j) => {
        if (i < 0 || j < 0) return 0;
        if (obstacleGrid[i][j] === 1) return 0;

        if (dp[i][j]) return dp[i][j];
        if (i === 0 && j === 0) return 1;

        return dp[i][j] = dfs(i - 1, j) + dfs(i, j - 1);
    }
    return dfs(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
};

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var uniquePathsWithObstacles = function (obstacleGrid) {

    const dp = Array(obstacleGrid.length).fill().map(() => Array(obstacleGrid[0].length).fill(0))

    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[i].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else if (i === 0 && j === 0) {
                dp[i][j] = 1
            } else {
                if (i > 0) dp[i][j] += dp[i - 1][j]
                if (j > 0) dp[i][j] += dp[i][j - 1]
            }
        }
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};

// Iterative/tabular way(Bottom-up) 1D space optimization
// Time complexity: O(N×M)
// Space complexity: O(M)
var uniquePathsWithObstacles = function (obstacleGrid) {

    let prev = Array(obstacleGrid[0].length).fill(0)

    for (let i = 0; i < obstacleGrid.length; i++) {
        const current = Array(obstacleGrid[0].length).fill(0)
        for (let j = 0; j < obstacleGrid[i].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                current[j] = 0
            } else if (i === 0 && j === 0) {
                current[j] = 1
            } else {
                if (i > 0) current[j] += prev[j]
                if (j > 0) current[j] += current[j - 1]
            }
        }
        prev = current
    }
    return prev[obstacleGrid[0].length - 1]
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))
console.log(uniquePathsWithObstacles([[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]))
