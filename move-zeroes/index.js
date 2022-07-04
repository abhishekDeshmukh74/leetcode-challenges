var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right]) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
