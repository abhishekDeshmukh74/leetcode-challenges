var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const levels = []
    while (queue.length) {
        let currentLevelLength = queue.length
        const currentLevel = []
        while (currentLevelLength--) {
            const current = queue.shift()
            currentLevel.push(current.val)
            for (const child of current.children) {
                queue.push(child)
            }
        }
        levels.push(currentLevel)
    }
    return levels
};
