// Sliding window => O(n)

var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) buyPrice = prices[i];

    if (prices[i] - buyPrice > maxProfit) maxProfit = prices[i] - buyPrice;
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
