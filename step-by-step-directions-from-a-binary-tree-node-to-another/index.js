function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(5);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);
const node4 = new TreeNode(4);
root.left = node1;
root.right = node2;
node1.left = node3;
node2.left = node6;
node2.right = node4;

var getDirections = function (root, startValue, destValue) {
    const findLca = (node) => {
        if (!node || node.val == startValue || node.val == destValue) return node;
        const left = findLca(node.left);
        const right = findLca(node.right);
        return left && right ? node : left || right;
    };

    const findDepth = (node, count = 0) => {
        if (!node) return 0;
        if (node.val === startValue) return count;
        return findDepth(node.left, count + 1) || findDepth(node.right, count + 1);
    };

    const findPath = (node, str = "") => {
        if (!node) return "";
        if (node.val === destValue) return str;
        return findPath(node.left, str + "L") || findPath(node.right, str + "R");
    };

    const lcaNode = findLca(root);
    const depth = findDepth(lcaNode);
    const path = findPath(lcaNode);
    return "U".repeat(depth) + path;
};

console.log(getDirections(root, 3, 6));
