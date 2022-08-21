// For large max - min, code is not efficient
var longestConsecutive = function (nums) {
    const set = new Set();
    let min = Infinity;
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
        if (nums[i] < min) min = nums[i]
        if (nums[i] > max) max = nums[i]
    }

    let currentSeq = 0;
    let maxConsSeq = 0;
    for (let i = min - 1; i < max; i++) {
        if (set.has(i + 1)) {
            currentSeq++
            if (maxConsSeq < currentSeq) maxConsSeq = currentSeq
        } else {
            currentSeq = 0
        }
    }
    return maxConsSeq
}

var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let longest = 0;

    for (const num of nums) {
        if (set.has(num - 1)) continue;
        let currSeqLength = 0;
        while (set.has((num + currSeqLength))) currSeqLength++
        longest = Math.max(longest, currSeqLength)
    }
    return longest
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999]))
