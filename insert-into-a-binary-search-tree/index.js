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

// var insertIntoBST = function (root, val) {
//   const node = new TreeNode(val);
//   if (!root) return node;

//   let current = root;
//   while (current) {
//     if (val > current.val) {
//       if (!current.right) {
//         current.right = node;
//         return root;
//       }
//       current = current.right;
//     } else {
//       if (!current.left) {
//         current.left = node;
//         return root;
//       }
//       current = current.left;
//     }
//   }
// };

// Iterative way
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
        break;
      }
      stack.push(current.left);
    } else {
      if (!current.right) {
        current.right = newNode;
        break;
      }
      stack.push(current.right);
    }
  }
  return root;
};

console.log(insertIntoBST(root, 5));
