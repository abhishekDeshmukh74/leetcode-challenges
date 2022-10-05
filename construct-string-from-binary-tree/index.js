function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
root.left = node2;
root.right = node3;
node3.left = node4;

const tree2str = root => {
    if (!root) return '';

    const val = root.val;
    const left = tree2str(root.left);
    const right = tree2str(root.right);

    if (!left && !right) return `${val}`; // both left and right are empty

    if (!right) return `${val}(${left})`; // right is empty, keep the left

    return `${val}(${left})(${right})`; // left and right are not empty
};

console.log(tree2str(root))
