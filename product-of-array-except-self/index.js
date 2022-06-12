// Due to the constrain of "algorithm runs in O(n) time and without using the division operation" logic is tricky. Use prefix and postfix array to calculate products. Product of i = prefix[i - 1] * postfix[i + 1] and handle edge cases where prefix value should be 1

// With Prefix and postfix arr => O(n) for time and space + not using division operator
var productExceptSelf = function (nums) {
  const prefix = [nums[0]];
  const postfix = [nums[nums.length - 1]];
  const output = [];

  for (let i = 1; i < nums.length; i++) prefix.push(prefix[i - 1] * nums[i]);

  for (let i = nums.length - 2; i >= 0; i--) postfix.unshift(postfix[0] * nums[i]);

  for (let i = 0; i < nums.length; i++) {
    const prefixVal = i === 0 ? 1 : prefix[i - 1];
    const postfixVal = i === nums.length - 1 ? 1 : postfix[i + 1];
    output.push(prefixVal * postfixVal);
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
