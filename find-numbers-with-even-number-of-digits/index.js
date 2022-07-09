var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const noDigits = nums[i].toString().length;
    if (noDigits % 2 === 0) count++;
  }
  return count;
};
console.log(findNumbers([12, 345, 2, 6, 7896]));
