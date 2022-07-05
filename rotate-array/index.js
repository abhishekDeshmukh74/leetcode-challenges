// Reverse the array; reverse 0-k-1 and reverse k to n-1 elements
var rotate = function (nums, k) {
  k = k % nums.length;
  const reverseArr = (left, right) => {
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  };
  reverseArr(0, nums.length - 1);
  reverseArr(0, k - 1);
  reverseArr(k, nums.length - 1);
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1], 2));
