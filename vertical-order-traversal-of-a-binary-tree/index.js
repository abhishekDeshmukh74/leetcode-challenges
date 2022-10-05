function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
root.left = node2
root.right = node3
node2.left = node4
node2.right = node6
node3.left = node5
node3.right = node7

const root2 = new TreeNode(3)
const node1_2 = new TreeNode(1)
const node4_2 = new TreeNode(4)
const node0_2 = new TreeNode(0)
const node21_2 = new TreeNode(2)
const node22_2 = new TreeNode(2)

root2.left = node1_2
root2.right = node4_2
node1_2.left = node0_2
node1_2.right = node21_2
node4_2.left = node22_2

const verticalTraversal = root => {
    if (!root) return;

    const output = [];
    const traverse = (root, row, col) => {
        output.push([root.val, row, col]);
        if (root.left) traverse(root.left, row + 1, col - 1);
        if (root.right) traverse(root.right, row + 1, col + 1);
    };

    traverse(root, 0, 0);
    // sort array by col then row then val
    output.sort(([valA, rowA, colA], [valB, rowB, colB]) => {
        if (colA !== colB) return colA - colB; // col
        if (rowA !== rowB) return rowA - rowB; // row
        return valA - valB; // val
    });

    // create output array by col and push values
    const map = new Map();
    for (const [val, row, col] of output) {
        if (!map.has(col)) map.set(col, []);
        map.get(col).push(val);
    }
    return [...map.values()];
};

console.log(verticalTraversal(root))
console.log(verticalTraversal(root2))
