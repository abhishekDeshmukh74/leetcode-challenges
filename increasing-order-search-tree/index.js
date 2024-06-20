function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);
const node9 = new TreeNode(9);

node5.left = node3;
node5.right = node6;
node3.left = node2;
node3.right = node4;
node6.right = node8;
node2.left = node1;
node8.left = node7;
node8.right = node9;

const increasingBST = (root) => {
    const stack = [];
    let current = root;
    const dummy = new TreeNode(0);
    let currentNewNode = dummy;

    while (true) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            if (!stack.length) return dummy.right;
            current = stack.pop();
            currentNewNode.right = new TreeNode(current.val);
            currentNewNode = currentNewNode.right;
            current = current.right;
        }
    }
};
console.log(increasingBST(node5));
