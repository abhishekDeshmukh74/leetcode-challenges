var findDuplicate = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  const expectedSum = ((nums.length - 1) * nums.length) / 2;
  return sum - expectedSum;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
