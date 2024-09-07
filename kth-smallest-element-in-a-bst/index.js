function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(5);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const node1 = new TreeNode(1);

root.left = node3;
root.right = node6;
node3.left = node2;
node3.right = node4;
node2.left = node1;

var kthSmallest = function (root, k) {
    const stack = [];
    let index = 0;
    let current = root;

    while (true) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            if (!stack.length) break;
            index++;
            current = stack.pop();
            if (index === k) return current.val;
            current = current.right;
        }
    }
};

var kthSmallest = function (root, k) {
    let count = 0;
    let result;

    const inOrder = (node) => {
        if (!node) return;

        inOrder(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        inOrder(node.right);
    };

    inOrder(root);
    return result;
};

console.log(kthSmallest(root, 3));
