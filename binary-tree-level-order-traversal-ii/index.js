function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)

root.left = node9
root.right = node20
node9.left = node15
node9.right = node7

var levelOrderBottom = function (root) {
    const levels = []
    if (!root) return levels
    const queue = [root]

    while (queue.length) {
        let currentLength = queue.length
        const level = []

        while (currentLength--) {
            const current = queue.shift()
            level.push(current.val)
            current.left && queue.push(current.left)
            current.right && queue.push(current.right)
        }
        levels.unshift(level)
    }
    return levels
}

console.log(levelOrderBottom(root))
