function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);

const pNode2 = new TreeNode(2);
const pNode3 = new TreeNode(3);
const pNode4 = new TreeNode(4);
const qNode2 = new TreeNode(2);
const qNode3 = new TreeNode(3);
const qNode4 = new TreeNode(4);

root.left = pNode2;
root.right = qNode2;
pNode2.left = null;
pNode2.right = pNode3;
qNode2.left = null;
qNode2.right = pNode3;

// Not that efficient
var isSymmetric = function (root) {
  if (!root) return true;
  const queue = [root];

  while (queue.length) {
    const currentLevelLength = queue.length;
    const copyQueue = queue.slice(0);
    for (let i = 0; i < currentLevelLength; i++) {
      const current = queue.shift();
      const copy = copyQueue.pop();
      if (current) {
        if (current.val !== copy?.val) return false;
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }
  return true;
};

console.log(isSymmetric(root));
