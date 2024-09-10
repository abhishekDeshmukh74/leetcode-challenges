// Time Complexity: O(M * N), where M, N are the lengths of A, B
// Space Complexity: O(M * N), the space used by dp
var findLength = function (nums1, nums2) {

    const table = Array(nums1.length + 1).fill().map(() => Array(nums2.length + 1).fill(0))

    let max = 0;
    for (let i = 1; i <= nums1.length; i++) {

        for (let j = 1; j <= nums2.length; j++) {

            if (nums1[i - 1] === nums2[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
                max = Math.max(max, table[i][j])
            } else {
                table[i][j] = 0
            }
        }
    }
    return max
};

// Time Complexity: O(M * N), where M, N are the lengths of A, B
// Space Complexity: O(N), the space used by prev
var findLength = function (nums1, nums2) {
    let prev = Array(nums2.length + 1).fill(0)
    let max = 0;

    for (let i = 1; i <= nums1.length; i++) {
        let current = Array(nums2.length + 1).fill(0)

        for (let j = 1; j <= nums2.length; j++) {

            if (nums1[i - 1] === nums2[j - 1]) {
                current[j] = 1 + prev[j - 1]
                max = Math.max(max, current[j])
            } else {
                current[j] = 0
            }
        }
        prev = current
    }
    return max
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]))
console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]))
