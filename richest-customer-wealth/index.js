var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (const account of accounts) {
    const currentWealth = account.reduce((a, c) => a + c);
    if (currentWealth > maxWealth) maxWealth = currentWealth;
  }
  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
