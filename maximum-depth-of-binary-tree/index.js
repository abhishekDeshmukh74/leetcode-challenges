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
root.left = node9
root.right = node20
node20.left = node15
node20.right = node7

// Recursive DFS - Time complexity O(n)
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};

// Iterative DFS - Time complexity O(n)
var maxDepth = function (root) {
  if (!root) return 0;

  const stack = [[root, 1]];
  let maxDepth = 1;

  while (stack.length) {
    const [current, distance] = stack.pop();
    if (distance > maxDepth) maxDepth = distance;

    current.left && stack.push([current.left, distance + 1]);
    current.right && stack.push([current.right, distance + 1]);
  }
  return maxDepth;
};

// Iterative BFS - Time complexity O(n)
var maxDepth = function (root) {
  if (!root) return 0;

  let maxDepth = 0;
  const queue = [root];
  while (queue.length) {
    const currentQueueLength = queue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      const current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    maxDepth++;
  }
  return maxDepth;
};

console.log(maxDepth(root));
