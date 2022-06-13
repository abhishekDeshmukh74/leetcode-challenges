var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i <= piles.length / 3; i++) max += piles[piles.length - 2 * i];
  return max;
};
console.log(maxCoins([2, 4, 1, 2, 7, 8]));
