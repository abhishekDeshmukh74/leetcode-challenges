function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
const node2 = new TreeNode(2)
const node6 = new TreeNode(6)
const node1 = new TreeNode(1)
const node3 = new TreeNode(3)
const node5 = new TreeNode(5)
root.left = node2
root.right = node6
node2.left = node3
node2.right = node1
node6.right = node5

var addOneRow = function (root, val, depth) {
    const queue = [root]
    let level = 0

    if (depth === 1) {
        const newRoot = new TreeNode(val)
        newRoot.left = root
        return newRoot
    }

    while (queue.length) {
        let currentLevelLength = queue.length
        level++

        while (currentLevelLength--) {
            const current = queue.shift()
            if (level === depth - 1) {
                const tempLeft = current.left
                const tempRight = current.right
                current.left = new TreeNode(val)
                current.right = new TreeNode(val)
                current.left.left = tempLeft
                current.right.right = tempRight
                if (currentLevelLength === 0) return root
            }

            current.left && queue.push(current.left)
            current.right && queue.push(current.right)
        }
    }
};

console.log(addOneRow(root, 1, 2))
console.log(addOneRow(root, 1, 3))
