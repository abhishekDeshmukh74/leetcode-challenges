var nextGreaterElement = function (nums1, nums2) {
    const stack = []
    const map = {}

    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            map[nums2[i]] = -1
        } else if (stack.length && stack[stack.length - 1] > nums2[i]) {
            map[nums2[i]] = stack[stack.length - 1]
        } else if (stack.length && stack[stack.length - 1] <= nums2[i]) {
            while (stack.length && stack[stack.length - 1] <= nums2[i]) {
                stack.pop()
            }
            if (stack.length === 0) {
                map[nums2[i]] = -1
            } else {
                map[nums2[i]] = stack[stack.length - 1]
            }
        }
        stack.push(nums2[i])
    }

    const result = Array(nums1.length)
    for (let i = 0; i < nums1.length; i++) result[i] = map[nums1[i]]
    return result
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
