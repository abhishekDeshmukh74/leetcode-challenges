// Recursive way(Top-down)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var uniquePaths = function (m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill())

  const dfs = (i, j) => {
    if (i < 0 || j < 0) return 0;
    if (dp[i][j]) return dp[i][j];
    if (i === 0 && j === 0) return 1;

    return dp[i][j] = dfs(i - 1, j) + dfs(i, j - 1);
  }
  return dfs(m - 1, n - 1)
};

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N×M)
// Space complexity: O(N×M)
var uniquePaths = function (m, n) {

  const dp = Array(m).fill().map(() => Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1
      } else {
        if (i > 0) dp[i][j] += dp[i - 1][j]
        if (j > 0) dp[i][j] += dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
};

// Iterative/tabular way(Bottom-up) with 1D space optimization
// Time complexity: O(N×M)
// Space complexity: O(N)

var uniquePaths = function (m, n) {
  let prev = Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    const current = Array(n).fill(0)
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        current[j] = 1
      } else {
        if (i > 0) current[j] += prev[j]
        if (j > 0) current[j] += current[j - 1]
      }
    }
    prev = current
  }
  return prev[n - 1]
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(23, 12));
