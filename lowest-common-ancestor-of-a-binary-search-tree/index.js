function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(6);
const node2 = new TreeNode(2);
const node8 = new TreeNode(8);
const node0 = new TreeNode(0);
const node4 = new TreeNode(4);
const node7 = new TreeNode(7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
root.left = node2;
root.right = node8;
node2.left = node0;
node2.right = node4;
node8.left = node7;
node8.right = node9;
node4.left = node3;
node4.right = node5;

// Log(n)
var lowestCommonAncestor = function (root, p, q) {
    let current = root
    while (current) {
        if (p.val < current.val && q.val < current.val) {
            current = current.left
        } else if (p.val > current.val && q.val > current.val) {
            current = current.right
        } else {
            return current
        }
    }
};

console.log(lowestCommonAncestor(root, node2, node4))
