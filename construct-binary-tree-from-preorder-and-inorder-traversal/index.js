function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)
root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

var buildTree = function (preOrder, inOrder) {
  if (!preOrder?.length || !inOrder?.length) return null;
  const root = new TreeNode(preOrder[0]);
  const middle = inOrder.indexOf(preOrder[0]);

  root.left = buildTree(preOrder.slice(1, middle + 1), inOrder.slice(0, middle));
  root.right = buildTree(preOrder.slice(middle + 1), inOrder.slice(middle + 1));

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
