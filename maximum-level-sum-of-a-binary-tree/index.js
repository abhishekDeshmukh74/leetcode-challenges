function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node7 = new TreeNode(7)
const node0 = new TreeNode(0)
const node7_2 = new TreeNode(7)
const nodeMinus8 = new TreeNode(-8)

root.left = node7
root.right = node0
node7.left = node7_2
node7.right = nodeMinus8

var maxLevelSum = function (root) {
    if (!root) return 0
    const queue = [root]
    let maxSumLevel = 0
    let level = 0
    let maxSum = -Infinity

    while (queue.length) {
        let currentQueueLength = queue.length
        let currentLevelSum = 0
        level++
        while (currentQueueLength--) {
            const current = queue.shift()
            currentLevelSum += current.val
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
        if (currentLevelSum > maxSum) {
            maxSum = currentLevelSum
            maxSumLevel = level
        }
    }
    return maxSumLevel
};

console.log(maxLevelSum(root))
