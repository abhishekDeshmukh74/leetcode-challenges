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
// var postorderTraversal = function (root) {
//     if (!root) return []
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
// };

// Iterative DFS
var postorderTraversal = function (root) {
    const result = [];
    const stack = [];
    root && stack.push(root)

    while (stack.length > 0) {
        const current = stack.pop();
        if (current.left && !current.left.hasOwnProperty('visited')) {
            stack.push(current);
            current.left.visited = true;
            stack.push(current.left);
        } else if (current.right && !current.right.hasOwnProperty('visited')) {
            stack.push(current);
            current.right.visited = true;
            stack.push(current.right);
        } else {
            result.push(current.val);
        }
    }
    return result;
};

console.log(postorderTraversal(root))
