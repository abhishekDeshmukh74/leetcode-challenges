var majorityElement = function (nums) {
    const map = {};
    for (const num of nums) map[num] = map[num] + 1 || 1;

    for (const key in map) {
        if (map[key] > Math.floor(nums.length / 2))
            return key
    }
};

console.log(majorityElement([3, 2, 3]))
