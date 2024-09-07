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
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);
const node9 = new TreeNode(9);
const node10 = new TreeNode(10);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node5.left = node7;
node5.right = node8;
node6.left = node9;
node6.right = node10;

var boundaryOfBinaryTree = function (root) {
    const result = []

    const isLeaf = (node) => node && !node.left && !node.right;

    addLeftBoundary = (node) => {
        let current = node.left
        while (current) {
            if (!isLeaf(current)) result.push(current.val)
            current = current.left ? current.left : current.right
        }
    }

    addLeavesBoundary = (node) => {
        if (!node) return
        if (isLeaf(node)) result.push(node.val)
        addLeavesBoundary(node.left)
        addLeavesBoundary(node.right)
    }

    addRightBoundary = (node) => {
        let current = node.right
        const right = []
        while (current) {
            if (!isLeaf(current)) right.push(current.val)
            current = current.right ? current.right : current.left
        }
        for (let i = right.length - 1; i >= 0; i--) result.push(right[i])
    }

    if (!isLeaf(root)) result.push(root.val)

    addLeftBoundary(root);
    addLeavesBoundary(root);
    addRightBoundary(root);
    return result
};

console.log(boundaryOfBinaryTree(root))
