function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
const node3 = new TreeNode(3)
const node6 = new TreeNode(6)
const node2 = new TreeNode(2)
const node4 = new TreeNode(4)
const node1 = new TreeNode(1)

root.left = node3
root.right = node6
node3.left = node2
node3.right = node4
node2.left = node1

var kthSmallest = function (root, k) {
    const stack = []
    let index = 0
    root && stack.push(root)

    while (stack.length) {
        const current = stack.pop()
        if (current.left) {
            stack.push(current)
            stack.push(current.left)
            // We only have to go to left once as current is added to stack again, this line will prevent going to left again
            current.left = null
        } else {
            index++
            if (index === k) return current.val
            current.right && stack.push(current.right)
        }
    }
}

console.log(kthSmallest(root, 3))
