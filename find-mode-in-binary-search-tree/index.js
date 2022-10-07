function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node2_1 = new TreeNode(2)
const node2_2 = new TreeNode(2)
root.right = node2_1
node2_1.left = node2_2

var findMode = function (root) {
    if (!root) return null
    const stack = [root, -Infinity, Infinity]

    var map = new Map();

    while (stack.length) {
        const current = stack.pop()

        if (map.get(current.val)) {
            map.set(current.val, map.get(current.val) + 1)
        } else {
            map.set(current.val, 1)
        }

        current.left && stack.push(current.left)
        current.right && stack.push(current.right)
    }
    let max = 0
    map.forEach((value) => max = Math.max(max, value))

    const result = []
    map.forEach((value, key) => value === max && result.push(key));
    return result
};

console.log(findMode(root))
