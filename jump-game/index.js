// Dynamic Programming
// var canJump = function (nums) {
//   const table = Array(nums.length).fill(false);
//   table[0] = true;

//   for (let i = 0; i <= nums.length; i++) {
//     if (table[i]) {
//       for (let j = 1; j <= nums[i]; j++) {
//         if (i + j > nums.length) continue;
//         table[i + j] = true;
//       }
//     }
//   }
//   return table[nums.length];
// };

// Greedy
var canJump = function (nums) {
    let reachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) return false;
        if (i + nums[i] >= nums.length - 1) return true;
        reachable = Math.max(reachable, i + nums[i]);
    }
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([0]))
