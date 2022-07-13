var singleNumber = function (nums) {
  let response = 0;
  for (let i = 0; i < nums.length; i++) response = response ^ nums[i];
  return response;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
