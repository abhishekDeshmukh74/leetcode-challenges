// Brute force approach - Time complexity - O(n^2)
var maxArea = function (height) {
  let maxAmtWater = 0;

  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const currentWater = Math.min(height[left], height[right]) * (right - left);
      if (currentWater > maxAmtWater) maxAmtWater = currentWater;
    }
  }
  return maxAmtWater;
};

// Linear approach - Time complexity - O(n)
// shrinking window, left/right initially at endpoints, shift the pointer with min height;
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAmtWater = 0;
  while (left < right) {
    const currentWater = Math.min(height[left], height[right]) * (right - left);
    if (currentWater > maxAmtWater) maxAmtWater = currentWater;
    height[left] < height[right] ? left++ : right--
  }

  return maxAmtWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
