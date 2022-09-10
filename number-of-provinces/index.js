var findCircleNum = function (isConnected) {
    const queue = []
    const visited = new Set()
    let answer = 0

    for (let i = 0; i < isConnected.length; i++) {
        if (visited.has(i)) continue;
        queue.push(i)
        visited.add(i)
        answer++

        // BFS
        while (queue.length) {
            const current = queue.shift()
            for (let j = 0; j < isConnected.length; j++) {
                if (visited.has(j)) continue;
                if (isConnected[current][j] === 0) continue;

                visited.add(j)
                queue.push(j)
            }
        }
    }
    return answer
}

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(findCircleNum([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]
]))
