// Iterative approach - Time complexity O(numRows^2)
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  const dp = [[1]];

  for (let i = 1; i < numRows; i++) {
    const currentLevelArr = [];
    const prev = dp[i - 1];
    currentLevelArr[0] = currentLevelArr[prev.length] = 1;
    for (let j = 1; j < prev.length; j++) {
      currentLevelArr[j] = prev[j] + prev[j - 1];
    }
    dp.push(currentLevelArr);
  }
  return dp;
};

console.log(generate(5));
console.log(generate(30));
