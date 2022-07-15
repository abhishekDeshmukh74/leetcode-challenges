function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

// Time complexity : Calculate Height of tree (Olog(2n+1) * Log(n+1)) = Logn * logn =
var countNodes = function (root) {
  if (!root) return 0;

  let leftLevel = 1;
  let rightLevel = 1;
  let currentLeft = root;
  let currentRight = root;

  while (currentLeft) {
    currentLeft = currentLeft.left;
    leftLevel++;
  }
  while (currentRight) {
    currentRight = currentRight.right;
    leftLevel++;
  }

  if (leftLevel === rightLevel) return Math.pow(2, leftLevel) - 1;
  return 1 + countNodes(root.left) + countNodes(root.right);
};

console.log(countNodes(root));
