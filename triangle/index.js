// Recursive way(Top-down)
// Time complexity: O(N^2)
// Space complexity: O(N^2)
var minimumTotal = function (triangle) {
  const dp = Array(triangle.length).fill().map(() => Array(triangle[triangle.length - 1].length).fill())

  const dfs = (i, j) => {
    if (i === triangle.length - 1) return triangle[i][j]
    if (dp[i][j] !== undefined) return dp[i][j]
    return dp[i][j] = triangle[i][j] + Math.min(dfs(i + 1, j), dfs(i + 1, j + 1))
  }
  return dfs(0, 0)
};

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N^2)
// Space complexity: O(N^2)
var minimumTotal = function (triangle) {
  const dp = Array(triangle.length).fill().map(() => Array(triangle[triangle.length - 1].length).fill(0))

  for (let j = 0; j < triangle.length; j++) dp[triangle.length - 1][j] = triangle[triangle.length - 1][j]

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  return dp[0][0]
};

// Iterative/tabular way(Bottom-up) 1D space optimization
// Time complexity: O(N^2)
// Space complexity: O(N)
var minimumTotal = function (triangle) {
  let prev = Array(triangle[triangle.length - 1].length)

  for (let j = 0; j < triangle.length; j++) prev[j] = triangle[triangle.length - 1][j]

  for (let i = triangle.length - 2; i >= 0; i--) {
    const current = Array(triangle[triangle.length - 1].length)
    for (let j = i; j >= 0; j--) {
      current[j] = triangle[i][j] + Math.min(prev[j], prev[j + 1]);
    }
    prev = current
  }
  return prev[0]
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
