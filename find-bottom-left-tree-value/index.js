function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(2)
const node1 = new TreeNode(1)
const node3 = new TreeNode(3)
root.left = node1
root.right = node3

var findBottomLeftValue = function (root) {
    const queue = [root]
    let max = root.left

    while (queue.length) {
        const currentLength = queue.length
        for (let i = 0; i < currentLength; i++) {
            const current = queue.shift()
            if (i === 0) max = current.val
            current.left && queue.push(current.left)
            current.right && queue.push(current.right)
        }
    }
    return max
}

console.log(findBottomLeftValue(root))
