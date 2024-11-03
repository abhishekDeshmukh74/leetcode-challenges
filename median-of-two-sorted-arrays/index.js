// Time Complexity => O(Log(Min(N1,N2)))
var findMedianSortedArrays = function (nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length

    // making sure n2 is always smaller than n1
    if (n1 > n2) return findMedianSortedArrays(nums2, nums1)

    let low = 0
    let high = n1
    const numsRequiredOnLeftSide = Math.floor((n1 + n2 + 1) / 2)

    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2)
        const mid2 = numsRequiredOnLeftSide - mid1
        let l1 = -Infinity
        let l2 = -Infinity
        let r1 = Infinity
        let r2 = Infinity

        if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1]
        if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1]
        if (mid1 < n1) r1 = nums1[mid1]
        if (mid2 < n2) r2 = nums2[mid2]

        if (l1 <= r2 && l2 <= r1) {
            if ((n1 + n2) % 2 === 1) return Math.max(l1, l2)
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
        }

        l1 > r2 ? high = mid1 - 1 : low = mid1 + 1
    }
};

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
