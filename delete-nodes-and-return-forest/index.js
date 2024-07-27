function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)

root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

var delNodes = function (root, toDelete) {
    const nodesToDelete = new Set(toDelete);
    const forest = []

    const postorderDfs = (node) => {
        if (!node) return null
        node.left = postorderDfs(node.left);
        node.right = postorderDfs(node.right);
        if (nodesToDelete.has(node.val)) {
            node.left && forest.push(node.left)
            node.right && forest.push(node.right)
            return null
        }
        return node
    }
    postorderDfs(root)
    if (!nodesToDelete.has(root.val)) forest.push(root)
    return forest;
};

console.log(delNodes(root, [3, 5]))
