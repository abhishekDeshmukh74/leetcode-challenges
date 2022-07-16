function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

// Recursive DFS
var preorderTraversal = function (root) {
  if (!root) return []
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};


// Iterative DFS
// var preorderTraversal = function (root) {
//   const stack = [root];
//   const result = [];
//   while (stack.length) {
//     const current = stack.pop();
//     if (!current) continue;
//     result.push(current.val);
//     stack.push(current.right);
//     stack.push(current.left);
//   }
//   return result;
// };

console.log(preorderTraversal(root))
