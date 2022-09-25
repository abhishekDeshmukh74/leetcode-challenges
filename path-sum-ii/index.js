function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
const node4_1 = new TreeNode(4)
const node8 = new TreeNode(8)
const node15 = new TreeNode(15)
const node11 = new TreeNode(11)
const node13 = new TreeNode(13)
const node4_2 = new TreeNode(4)
const node7 = new TreeNode(7)
const node2 = new TreeNode(2)
const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
root.left = node4_1
root.right = node8
node4_1.left = node11
node11.left = node7
node11.right = node2
node8.left = node13
node8.right = node4_2
node4_2.left = node5
node4_2.right = node1

var pathSum = function (root, targetSum) {
    const allPaths = []
    const traverse = (node, currentPath, currentSum) => {
        if (!node) return
        if (!node.left && !node.right && currentSum + node.val === targetSum) {
            allPaths.push([...currentPath, node.val])
        }
        node.left && traverse(node.left, [...currentPath, node.val], currentSum + node.val)
        node.right && traverse(node.right, [...currentPath, node.val], currentSum + node.val)
    }
    traverse(root, [], 0)
    return allPaths
}

console.log(pathSum(root, 22))
