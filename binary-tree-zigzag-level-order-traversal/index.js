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
node20.left = node15;
node20.right = node7;

var zigzagLevelOrder = function (root) {
    if (!root) return [];

    const queue = [root]
    const result = [];
    while (queue.length) {
        const currentLength = queue.length
        const levelResult = []

        for (let i = 0; i < currentLength; i++) {
            const current = queue.shift();
            levelResult.push(current.val)
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
        result.length % 2 === 0 ? result.push(levelResult) : result.push(levelResult.reverse())
    }
    return result
};

console.log(zigzagLevelOrder(root))
