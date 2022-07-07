function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const pNode1 = new TreeNode(1);
const pNode2 = new TreeNode(2);
const pNode3 = new TreeNode(3);
pNode1.left = pNode2;
pNode1.right = pNode3;

const qNode1 = new TreeNode(1);
const qNode2 = new TreeNode(2);
const qNode3 = new TreeNode(3);
qNode1.left = qNode2;
qNode1.right = qNode3;

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p && q) return false;
  if (p && !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(pNode1, qNode1));
