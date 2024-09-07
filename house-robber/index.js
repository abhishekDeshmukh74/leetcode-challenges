// Recursive
var rob = (nums, i = nums.length - 1, memo = {}) => {
  if (i in memo) return memo[i];
  if (i === 0) return nums[0];
  if (i === 1) return Math.max(nums[0], nums[1]);

  memo[i] = Math.max(
    nums[i] + rob(nums, i - 2, memo),
    rob(nums, i - 1, memo)
  );

  return memo[i];
};

// Iterative
var rob = (nums) => {
  const dp = [nums[0], Math.max(nums[0], nums[1] || 0)];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp.pop();
};

// Iterative space optimization
var rob = (nums) => {
  let prev2 = nums[0]
  let prev = Math.max(nums[0], nums[1] || 0)

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(nums[i] + prev2, prev);
    prev2 = prev
    prev = current
  }
  return prev;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ])
);
