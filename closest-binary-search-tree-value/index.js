function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
const node2 = new TreeNode(2)
const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
const node3 = new TreeNode(3)
root.left = node2
root.right = node5
node2.left = node1
node2.right = node3


var closestValue = function (root, target) {
    let closestValue = null;
    let closestDiff = Infinity;
    let current = root;

    while (current) {
        const diff = Math.abs(current.val - target);
        if (diff === 0) return current.val;

        if (diff < closestDiff || (diff === closestDiff && current.val < closestValue)) {
            closestDiff = diff;
            closestValue = current.val;
        }
        current = target < current.val ? current.left : current.right;
    }
    return closestValue;
};

console.log(closestValue(root, 3.714286))
console.log(closestValue(root, 2))
