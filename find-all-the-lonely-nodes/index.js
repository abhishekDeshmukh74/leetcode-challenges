function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)

root.left = node2
root.right = node3
node3.right = node4

var getLonelyNodes = function (root) {
    const result = []

    const traverse = (node, isOtherChildPresent) => {
        if (!isOtherChildPresent) result.push(node.val)
        node.left && traverse(node.left, Boolean(node.right))
        node.right && traverse(node.right, Boolean(node.left))
    }
    traverse(root, true)
    return result
}

console.log(getLonelyNodes(root))
