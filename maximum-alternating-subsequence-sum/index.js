// Memoized recursive
// var maxAlternatingSum = function (nums) {
//     // index-true/false
//     const memo = {};
//     const dfs = (i, even) => {
//         if (i === nums.length) return 0;
//         const key = `${i}-${even}`
//         if (memo[key]) return memo[key];

//         let total = even ? nums[i] : nums[i] * -1;
//         memo[key] = Math.max(total + dfs(i + 1, !even), dfs(i + 1, even))
//         return memo[key]
//     }
//     return dfs(0, true)
// };

var maxAlternatingSum = function (nums) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        tempEven = Math.max(oddSum + nums[i], evenSum)
        tempOdd = Math.max(evenSum - nums[i], oddSum)
        evenSum = tempEven;
        oddSum = tempOdd;
    }
    return evenSum
};

console.log(maxAlternatingSum([4, 2, 5, 3]))
