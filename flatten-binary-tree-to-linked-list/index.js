function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(5);
const node4 = new TreeNode(3);
const node5 = new TreeNode(4);
const node6 = new TreeNode(6);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

var flatten = function (root) {
    if (!root) return null
    const stack = [root]

    while (stack.length) {
        const current = stack.pop()
        current?.right && stack.push(current.right)
        current?.left && stack.push(current.left)
        if (stack.length) current.right = stack[stack.length - 1]
        current.left = null;
    }
    return root
};

// TODO: Morris traversal

console.log(flatten(root))
