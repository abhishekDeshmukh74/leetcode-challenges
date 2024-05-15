var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const prev = middle === 0 ? -Infinity : nums[middle - 1];
    const next = middle === nums.length - 1 ? -Infinity : nums[middle + 1];

    if (nums[middle] > prev && nums[middle] > next) return middle;
    next > nums[middle] ? (start = middle + 1) : (end = middle - 1);
  }
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
