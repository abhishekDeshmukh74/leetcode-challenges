function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node7 = new TreeNode(7);
const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node7;
node2.left = node1;
node2.right = node3;

// var searchBST = function (root, val) {
//   let current = root;
//   while (current) {
//     if (val === current.val) return current;
//     if (val < current.val) {
//       current = current.left;
//     } else {
//       current = current.right;
//     }
//   }
//   return null;
// };

var searchBST = function (root, val) {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val === val) return node;
    if (node.val > val) {
      if (node.left) stack.push(node.left);
    } else {
      if (node.right) stack.push(node.right);
    }
  }
  return null;
};

console.log(searchBST(root, 2));
