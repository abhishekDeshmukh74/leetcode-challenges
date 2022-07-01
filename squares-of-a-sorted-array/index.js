var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const result = [];

  while (left <= right) {
    const leftSqr = nums[left] * nums[left];
    const rightSqr = nums[right] * nums[right];

    if (leftSqr > rightSqr) {
      result.unshift(leftSqr);
      left++;
    } else {
      result.unshift(rightSqr);
      right--;
    }
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
