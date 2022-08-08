var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2)
    if (nums[pivot] === target) return pivot;
    nums[pivot] > target ? right = pivot - 1 : left = pivot + 1
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
