function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
const node2 = new TreeNode(2)
const node6 = new TreeNode(6)
const node1 = new TreeNode(1)
const node3 = new TreeNode(3)
root.left = node2
root.right = node6
node2.left = node1
node2.right = node3

var minDiffInBST = function (root) {
    let min = Infinity;
    let prev = null;

    const inOrder = function (node) {
        if (node === null) return

        inOrder(node.left)
        if (prev !== null) min = Math.min(min, node.val - prev.val)

        prev = node
        inOrder(node.right)
    }
    inOrder(root);
    return min;
};

console.log(minDiffInBST(root))
