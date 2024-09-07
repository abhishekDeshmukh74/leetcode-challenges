var rob = function (nums) {
  var robHelper = (start, end) => {
    let prev2 = 0;
    let prev1 = nums[start];
    for (let i = start + 1; i <= end; i++) {
      const current = Math.max(nums[i] + prev2, prev1);
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  };

  if (nums.length === 1) return nums[0];
  const withoutFirst = robHelper(0, nums.length - 2);
  const withoutLast = robHelper(1, nums.length - 1);
  return Math.max(withoutFirst, withoutLast);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
