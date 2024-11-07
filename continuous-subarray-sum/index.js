var checkSubarraySum = function (nums, k) {
    const remainderIndexMap = new Map();
    remainderIndexMap.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let remainder = prefixSum % k;

        // If -ve numbers are present in array add k to make it positive
        if (remainder < 0) remainder += k;

        if (remainderIndexMap.has(remainder)) {
            if (i - remainderIndexMap.get(remainder) > 1) return true;
        } else {
            remainderIndexMap.set(remainder, i);
        }
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13))
console.log(checkSubarraySum([23, 2, 4, 6, 6], 7))
