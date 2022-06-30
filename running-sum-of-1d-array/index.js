var runningSum = function (nums) {
  const prefix = [nums[0]];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(sum + nums[i]);
    sum = sum + nums[i];
  }
  return prefix;
};
console.log(runningSum([1, 2, 3, 4]));
