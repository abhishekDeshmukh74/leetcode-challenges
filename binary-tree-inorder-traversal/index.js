function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

// Recursive DFS
var inorderTraversal = function (root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// Morris Traversal

// Iterative DFS
function inorderTraversal(root) {
    const stack = [];
    const result = [];
    root && stack.push(root);
    while (stack.length) {
        const item = stack.pop();
        if (item.left) {
            stack.push(item);
            stack.push(item.left);
            item.left = null;
        }
        else {
            result.push(item.val);
            item.right && stack.push(item.right);
        }
    }
    return result;
}

console.log(inorderTraversal(root))
