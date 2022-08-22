var uniquePaths = function (m, n, memo = {}) {
  const key = `${m}-${n}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
};

// Time complexity: O(N×M)
//Space complexity: O(N×M)
var uniquePaths = function (m, n) {

  const table = Array(m).fill().map(() => Array(n).fill(1))

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      table[i][j] = table[i - 1][j] + table[i][j - 1]
    }
  }

  return table[m - 1][n - 1]
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(23, 12));
