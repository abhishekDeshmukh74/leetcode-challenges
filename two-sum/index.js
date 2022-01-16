// Brute force => O(n2)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Map => O(n)
// use map to check for difference value, map will add index of last occurrence of a num, don't use same element twice
var twoSum = function (nums, target) {
  // Map will contain iterated number as key and it's index as value
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 26));
