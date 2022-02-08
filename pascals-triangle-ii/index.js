// Iterative approach - Time complexity O(rowIndex^2)
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  const dp = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const currentLevelArr = [];
    const prev = dp[i - 1];
    currentLevelArr[0] = currentLevelArr[prev.length] = 1;
    for (let j = 1; j < prev.length; j++) {
      currentLevelArr[j] = prev[j] + prev[j - 1];
    }
    dp.push(currentLevelArr);
  }
  return dp[rowIndex];
};

console.log(getRow(3));
