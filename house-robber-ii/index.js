var rob = function (nums) {
  const helper = (arr) => {
    let rob1 = 0;
    let rob2 = 0;
    for (const num of arr) {
      const newRob = Math.max(rob1 + num, rob2);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  };

  if (nums.length === 1) return nums[0];
  const withoutFirst = helper(nums.slice(1));
  const withoutLast = helper(nums.slice(0, nums.length - 1));
  return Math.max(withoutFirst, withoutLast);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
