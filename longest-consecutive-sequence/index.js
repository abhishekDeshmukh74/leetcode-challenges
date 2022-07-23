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
