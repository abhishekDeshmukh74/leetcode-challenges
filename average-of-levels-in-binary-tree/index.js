function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
root.left = node9;
root.right = node20;
node9.left = node15;
node9.right = node7;

var averageOfLevels = function (root) {
    if (!root) return []
    const queue = [root]
    const levels = []

    while (queue.length) {
        const currentLevelLength = queue.length
        let sum = 0
        for (let i = 0; i < currentLevelLength; i++) {
            const current = queue.shift()
            sum += current.val
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        levels.push(sum / currentLevelLength)
    }
    return levels
}

console.log(averageOfLevels(root))
