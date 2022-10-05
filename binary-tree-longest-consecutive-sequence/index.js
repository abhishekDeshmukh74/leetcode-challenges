function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node3 = new TreeNode(3)
const node2 = new TreeNode(2)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
root.right = node3;
node3.left = node2;
node3.right = node4;
node4.right = node5;

var longestConsecutive = function (root) {
    if (!root) return 0
    let max = 0
    const queue = [[root, null, 0]]

    while (queue.length) {
        let [current, parentVal, currentLength] = queue.shift()
        if (parentVal === null || parentVal + 1 === current.val) {
            currentLength = currentLength + 1
        } else {
            currentLength = 1
        }
        current.left && queue.push([current.left, current.val, currentLength])
        current.right && queue.push([current.right, current.val, currentLength])
        max = Math.max(max, currentLength)
    }
    return max
}

console.log(longestConsecutive(root))
