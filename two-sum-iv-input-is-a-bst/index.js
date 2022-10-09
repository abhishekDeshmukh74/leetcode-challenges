function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
const node3 = new TreeNode(3)
const node6 = new TreeNode(6)
const node2 = new TreeNode(2)
const node4 = new TreeNode(4)
const node7 = new TreeNode(7)

root.left = node3
root.right = node6
node3.left = node2
node3.right = node4
node6.right = node7

var findTarget = function (root, k) {
    if (!root) return false
    const stack = [root]
    const set = new Set()

    while (stack.length) {
        const current = stack.pop()
        if (set.has(k - current.val)) return true
        set.add(current.val)

        current.right && stack.push(current.right)
        current.left && stack.push(current.left)
    }
    return false
}

console.log(findTarget(root, 9))
console.log(findTarget(root, 28))
