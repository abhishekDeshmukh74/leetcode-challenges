var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return middle;

    // left sorted portion
    if (nums[left] <= nums[middle]) {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    // right sorted portion
    else {
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
