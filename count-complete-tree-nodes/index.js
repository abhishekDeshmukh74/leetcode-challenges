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
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

// For a Complete Binary tree, If leftHeight == rightHeight, the num of nodes is 2^h - 1

// Time complexity : Calculate Height of tree (Olog(2n+1) * Log(n+1)) = Logn * logn =
var countNodes = function (root) {
  if (!root) return 0;
  const leftHeight = getHeight(root, true);
  const rightHeight = getHeight(root, false);

  if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;
  return 1 + countNodes(root.left) + countNodes(root.right);
};

const getHeight = function (node, isLeft) {
  let height = 0;
  while (node) {
    height++;
    node = isLeft ? node.left : node.right;
  }
  return height;
};

console.log(countNodes(root));
