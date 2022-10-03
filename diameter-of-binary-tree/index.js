function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

// Recursive Top-Down will have O(n^2), but recursive bottom-up will have O(n)
var diameterOfBinaryTree = function (root, max = 0) {
    const dfs = (root) => {
        if (!root) return -1
        const leftHeight = dfs(root.left)
        const rightHeight = dfs(root.right)
        max = Math.max(max, leftHeight + rightHeight + 2)
        return 1 + Math.max(leftHeight, rightHeight)
    }
    dfs(root)
    return max
};

console.log(diameterOfBinaryTree(root))
