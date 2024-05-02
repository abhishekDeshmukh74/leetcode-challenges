var countKDifference = function (nums, k) {
    let map = {};
    let numOfPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        numOfPairs += (map[nums[i] - k] || 0) + (map[nums[i] + k] || 0);
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    return numOfPairs;
};

// var countKDifference = function (nums, k) {
//     const map = new Map()
//     let numOfPairs = 0

//     for (let num of nums) {
//         map.set(num, (map.get(num) || 0) + 1)
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i] -k )) numOfPairs += map.get(nums[i] -k)
//     }
//     return numOfPairs
// };

console.log(countKDifference([1, 2, 2, 1], 1))
console.log(countKDifference([1, 3], 3))
console.log(countKDifference([3, 2, 1, 5, 4], 2))
