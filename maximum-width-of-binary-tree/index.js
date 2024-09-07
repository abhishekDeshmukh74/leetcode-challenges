function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node3 = new TreeNode(3)
const node2 = new TreeNode(2)
const node5 = new TreeNode(5)
const node3_2 = new TreeNode(3)
const node9 = new TreeNode(9)
root.left = node3
root.right = node2
node3.left = node5
node3.right = node3_2
node2.right = node9

var widthOfBinaryTree = function (root) {
    if (root == null) return 0
    let max = 0
    let queue = [[root, 0]]
    while (queue.length) {
        let currentQueueLength = queue.length
        let first = 0
        let last = 0
        // lastMin is used handle overflow
        let lastMin = queue[0][1]
        for (let j = 0; j < currentQueueLength; j++) {
            let [current, index] = queue.shift()
            index = index - lastMin
            if (j === 0) first = index
            if (j === currentQueueLength - 1) last = index
            current.left && queue.push([current.left, 2 * index + 1])
            current.right && queue.push([current.right, 2 * index + 2])
        }
        max = Math.max(max, last - first + 1)
    }
    return max
}

console.log(widthOfBinaryTree(root))
