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

var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const levels = []

  while (queue.length) {
    const level = []
    const currentLevelQueueLength = queue.length
    for (let i = 0; i < currentLevelQueueLength; i++) {
      const current = queue.shift()
      if (current) {
        level.push(current.val)
        queue.push(current.left)
        queue.push(current.right)
      }
    }
    if (level.length) levels.push(level)
  }
  return levels
};

console.log(levelOrder(root));
