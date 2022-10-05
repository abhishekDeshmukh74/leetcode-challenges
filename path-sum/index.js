function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
const node4_1 = new TreeNode(4)
const node8 = new TreeNode(8)
const node11 = new TreeNode(11)
const node13 = new TreeNode(13)
const node4_2 = new TreeNode(4)
const node7 = new TreeNode(7)
const node2 = new TreeNode(2)
const node1 = new TreeNode(1)

root.left = node4_1;
root.right = node8;
node4_1.left = node11;
node11.left = node7;
node11.right = node2;
node8.left = node13;
node8.right = node4_2;
node4_2.right = node1;

// Recursive DFS
// var hasPathSum = function (root, targetSum) {
//   if (!root && targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   const childTargetSum = targetSum - root.val;
//   return hasPathSum(root.left, childTargetSum) || hasPathSum(root.right, childTargetSum);
// };

// Iterative DFS
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [[root, 0]];

  while (stack.length) {
    const [current, currentSum] = stack.pop();
    if (!current.left && !current.right && currentSum + current.val === targetSum) return true;
    current.left && stack.push([current.left, currentSum + current.val]);
    current.right && stack.push([current.right, currentSum + current.val]);
  }
  return false;
};

console.log(hasPathSum(root, 22));
