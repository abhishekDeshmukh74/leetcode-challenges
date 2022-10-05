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
root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;


var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const dfs = (root, isLeft = false) => {
        if (!root) return 0
        if (isLeft && !root.left && !root.right) sum += root.val
        dfs(root.left, true)
        dfs(root.right)
    }
    dfs(root)
    return sum
};

console.log(sumOfLeftLeaves(root))
