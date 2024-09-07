function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(9);
const node8 = new TreeNode(8);
const node12 = new TreeNode(12);
const node5 = new TreeNode(5);
const node10 = new TreeNode(10);
const node13 = new TreeNode(13);
const node3 = new TreeNode(3);
const node7 = new TreeNode(7);
const node11 = new TreeNode(11);
const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6);
const node1 = new TreeNode(1);
root.left = node8;
root.right = node12;
node8.left = node5;
node12.left = node10;
node12.right = node13;
node10.right = node11;
node5.left = node3;
node5.right = node7;
node3.left = node2;
node3.right = node4;
node7.left = node6;
node2.left = node1;

var deleteNode = function (root, key) {
    if (!root) return null;

    // Node to be deleted found
    if (root.val === key) {
        // No left Child
        if (!root.left) return root.right;

        // No right Child
        if (!root.right) return root.left;

        // Node with two children: Get the inorder successor (smallest in the right subtree)
        let minNode = root.right;
        while (minNode.left) minNode = minNode.left;

        // Replace the value of the node to be deleted with the inorder successor's value
        root.val = minNode.val;

        // Delete the inorder successor
        root.right = deleteNode(root.right, minNode.val);
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};

console.log(deleteNode(root, 3))
// console.log(deleteNode(root, 0))
