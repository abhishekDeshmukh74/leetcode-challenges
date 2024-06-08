var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1; // Increment count if the least significant bit is 1
    n >>= 1; // Unsigned right shift by 1
  }
  return count;
};

console.log(hammingWeight(11));
