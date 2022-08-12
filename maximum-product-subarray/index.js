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


// Intuition
// If all the numbers are positive the product is always increasing. But when it comes to negative numbers, It gets a lot more tricky as the product of two negatives, is a positive. When we have a vector of all negatives, the signs of the product will be alternating.
// eg. { -1, -2, -3, -4, -5 } => -1, 2, -6, 24, -120

// so, to find maximum in such case, we need to track both maximum and minimum.
// example, in {- 1, -2, -3} max of first two elements will be 2 and min will be - 2
// but when combined with the third element - 3, our min will become - 2 * -3 = 6 which is our desired answer.

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
