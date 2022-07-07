var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let result = 0;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    maxCoins = (middle * (middle + 1)) / 2;
    if (maxCoins === n) return middle;
    if (maxCoins < n) {
      if (result < middle) result = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(1));
