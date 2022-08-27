var findLengthOfLCIS = function (nums) {
    let answer = 0
    let anchor = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] >= nums[i]) anchor = i;
        answer = Math.max(answer, i - anchor + 1);
    }
    return answer
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
