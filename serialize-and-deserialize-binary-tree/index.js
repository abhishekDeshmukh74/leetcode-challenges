function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
root.left = node2
root.right = node3
node3.left = node4
node3.right = node5

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return ''
    const queue = [root]
    let str = ''
    while (queue.length) {
        const current = queue.shift()
        if (!current) {
            str += 'n '
            continue;
        }
        str += current.val + ' '
        queue.push(current.left)
        queue.push(current.right)
    }
    return str;
};

/**
 * Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
    if (data === '') return null
    const values = data.split(' ')
    const root = new TreeNode(parseInt(values[0]))
    const queue = [root]

    // i-1 to ignore last trailing ' '
    for (let i = 1; i < values.length - 1; i++) {
        let parent = queue.shift()
        if (values[i] !== 'n') {
            const left = new TreeNode(parseInt(values[i]))
            parent.left = left
            queue.push(left)
        }
        i++
        if (values[i] !== 'n') {
            const right = new TreeNode(parseInt(values[i]))
            parent.right = right
            queue.push(right)
        }
    }
    return root
};

const serializedTree = serialize(root)
console.log(serializedTree)
console.log(deserialize(serializedTree))
