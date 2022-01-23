// Recursive - fails for large array sizes due to slice
const rob = (nums, memo = {}) => {
  if (memo[nums.length]) return memo[nums.length];
  if (nums.length === 1) memo[nums.length] = nums[0];
  if (nums.length === 2) memo[nums.length] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    memo[nums.length] = Math.max(
      nums[i] + rob(nums.slice(0, i - 1), memo),
      rob(nums.slice(0, i), memo)
    );
  }
  return memo[nums.length];
};

// Iterative
const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp.pop();
};

console.log(rob([1, 2, 3, 1]));
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ])
);
