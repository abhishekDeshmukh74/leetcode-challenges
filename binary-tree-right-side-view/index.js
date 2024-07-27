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
root.left = node2;
root.right = node3;
node2.right = node5;
node3.right = node4;

var rightSideView = function (root) {
  if (!root) return [];

  const rightSideValues = [];
  const queue = [root];

  while (queue.length) {
    rightSideValues.push(queue[queue.length - 1].val);
    const qLength = queue.length;
    for (let i = 0; i < qLength; i++) {
      const current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }
  return rightSideValues;
};

console.log(rightSideView(root));
