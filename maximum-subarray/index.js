var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let currentSum = 0

  nums.forEach(num => {
    if (currentSum < 0) currentSum = 0
    currentSum += num
    maxSum = Math.max(currentSum, maxSum)
  })
  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
