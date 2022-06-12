// Brute force approach - Time Complexity: O(n²) Space Complexity: O(1)
var maxProduct = function (nums) {
  let maxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let localProduct = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      localProduct = localProduct * nums[j];
      maxProduct = Math.max(localProduct, maxProduct);
    }
  }
  return maxProduct;
};

// Linear approach - use max and min products per index, for -ve number swap max and min
// Time Complexity: O(n) Space Complexity: O(1)
var maxProduct = function (nums) {
  let maxProduct = nums[0];
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    maxProduct = Math.max(maxProduct, max);
  }
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4]));
