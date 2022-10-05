function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(3);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

// Recursive DFS
// var minDepth = function (root) {
//     if (!root) return 0;
//     if (!root.left && !root.right) return 1;
//     let minDepthVar = Infinity
//     if (root.left) minDepthVar = Math.min(minDepth(root.left), minDepthVar)
//     if (root.right) minDepthVar = Math.min(minDepth(root.right), minDepthVar)
//     return minDepthVar + 1;
// };

// Iterative BFS
// Time complexity: in the worst case for a balanced tree we need to visit all nodes level by level up to the tree height, that excludes the bottom level only. This way we visit n/2 nodes, and thus the time complexity is O(n)
var minDepth = function (root) {
    let minDepth = 0;
    const queue = []
    root && queue.push([root, minDepth])

    while (queue.length) {
        const currentLvlLength = queue.length

        for (let i = 0; i < currentLvlLength; i++) {
            const [current, nodeDepth] = queue.shift();
            minDepth = nodeDepth + 1
            if (!current.left && !current.right) return minDepth;
            current.left && queue.push([current.left, minDepth])
            current.right && queue.push([current.right, minDepth])
        }
    }
    return minDepth
};

console.log(minDepth(root))
