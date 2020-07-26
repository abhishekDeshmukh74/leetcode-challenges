function summaryRanges(nums) {
    const ranges = []
    let start = 0
    let end = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i + 1] === -1) {
            end++
        } else {
            if (start === end) {
                ranges.push(`${nums[end]}`)
            } else {
                ranges.push(`${nums[start]}->${nums[end]}`)
            }
            start = i + 1
            end = i + 1
        }
    }
    return ranges
}
