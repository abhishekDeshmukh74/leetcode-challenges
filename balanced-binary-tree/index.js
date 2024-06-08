function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root1 = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)
root1.left = node9
root1.right = node20
node20.left = node15
node20.right = node7

const root2 = new TreeNode(1)
const node21 = new TreeNode(2)
const node22 = new TreeNode(2)
const node31 = new TreeNode(3)
const node32 = new TreeNode(3)
const node41 = new TreeNode(4)
const node42 = new TreeNode(4)

root2.left = node21
root2.right = node22
node21.left = node31
node21.right = node32
node31.left = node41
node31.right = node42

var isBalanced = function (root) {

    const dfs = (node) => {
        if (!node) return [true, 0]

        const left = dfs(node.left)
        const right = dfs(node.right)
        const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1
        return [balanced, 1 + Math.max(left[1], right[1])]
    }
    return dfs(root)[0]
};

console.log(isBalanced(root1))
console.log(isBalanced(root2))
