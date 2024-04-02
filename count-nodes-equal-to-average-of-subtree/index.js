function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
const node8 = new TreeNode(8)
const node5 = new TreeNode(5)
const node0 = new TreeNode(0)
const node1 = new TreeNode(1)
const node6 = new TreeNode(6)

root.left = node8
root.right = node5
node8.left = node0
node8.right = node1
node5.right = node6

var averageOfSubtree = function (root) {
    let count = 0
    const dfs = (node) => {
        if (!node) return [0, 0]
        const [leftSum, leftCount] = dfs(node.left)
        const [rightSum, rightCount] = dfs(node.right)
        const sum = leftSum + rightSum + node.val;
        const numOfNodes = leftCount + rightCount + 1
        const average = Math.floor(sum / numOfNodes)
        if (average === node.val) count++
        return [sum, numOfNodes]
    }
    dfs(root)
    return count
};

console.log(averageOfSubtree(root))
