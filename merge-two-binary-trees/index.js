function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root1 = new TreeNode(1)
const node3_1 = new TreeNode(3)
const node2 = new TreeNode(2)
const node5 = new TreeNode(5)
root1.left = node3_1
root1.right = node2
node3_1.left = node5

const root2 = new TreeNode(2)
const node1 = new TreeNode(1)
const node3_2 = new TreeNode(3)
const node4 = new TreeNode(4)
const node7 = new TreeNode(7)
root2.left = node1
root2.right = node3_2
node1.right = node4
node3_2.right = node7

// Create new merged tree
// var mergeTrees = function (root1, root2) {
//   if (!root1 && !root2) return null;
//   if (!root1 && root2) return root2;
//   if (root1 && !root2) return root1;

//   const root = new TreeNode(root1.val + root2.val);

//   root.left = mergeTrees(root1.left, root2.left);
//   root.right = mergeTrees(root1.right, root2.right);
//   return root;
// };

// Merge on root1
let mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

console.log(mergeTrees(root1, root2));
