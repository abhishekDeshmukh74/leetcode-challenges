function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(1)
root.left = node1_1
root.right = node1_2

var isUnivalTree = function (root, uniValue = root?.val) {
    const stack = [root]
    while (stack.length) {
        const current = stack.pop()
        if (current.val !== uniValue) return false
        current.left && stack.push(current.left)
        current.right && stack.push(current.right)
    }
    return true
}

console.log(isUnivalTree(root))
