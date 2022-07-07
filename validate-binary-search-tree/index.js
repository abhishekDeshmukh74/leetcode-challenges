function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(5);
const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);

root.left = node1;
root.right = node4;
node4.left = node3;
node4.right = node6;

// Recursive DFS
// var isValidBST = function (root, min = -Infinity, max = Infinity) {
//   if (!root) return true;

//   if (root.val <= min || root.val >= max) return false;

//   return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
// };

// Iterative BFS
var isValidBST = function (root) {
  if (!root) return true;

  const queue = [[root, -Infinity, Infinity]];

  while (queue.length) {
    const [current, min, max] = queue.shift();
    if (current.val <= min || current.val >= max) return false;
    current.left && queue.push([current.left, min, current.val]);
    current.right && queue.push([current.right, current.val, max]);
  }
  return true;
};

console.log(isValidBST(root));
