function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(-10);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node1 = new TreeNode(1);
const node2 = new TreeNode(-2);

root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

// Time complexity: O(N), where N is number of nodes, since we visit each node not more than 2 times.
// Space complexity: O(H), where H is a tree height, to keep the recursion stack. In the average case of balanced tree, the tree height H = logN, in the worst case of skewed tree, H = N.

var maxPathSum = function (root) {

    let max = -Infinity;
    const dfs = (root) => {
        if (!root) return 0;

        const leftMax = Math.max(dfs(root.left), 0)
        const rightMax = Math.max(dfs(root.right), 0)

        max = Math.max(max, leftMax + rightMax + root.val)
        return root.val + Math.max(leftMax, rightMax)
    }
    dfs(root)
    return max;
};

console.log(maxPathSum(root))
console.log(maxPathSum(node1))
console.log(maxPathSum(node2))
