var alienOrder = function (words) {
    const graph = {}
    const inDegrees = {}

    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            if (!graph[word[i]]) {
                graph[word[i]] = []
                inDegrees[word[i]] = 0
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        word1 = words[i]
        word2 = words[i + 1]
        const minLength = Math.min(word1.length, word2.length)

        // if prefix of the word is same but first word is longer(invalid ordering)
        if (word1.length > word2.length && word1.slice(0, minLength) === word2.slice(0, minLength)) return ''

        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                graph[word1[j]].push(word2[j])
                inDegrees[word2[j]]++
                break
            }
        }
    }

    // Topological sort
    let output = ''
    const queue = []
    for (const node in inDegrees) {
        if (inDegrees[node] === 0) queue.push(node)
    }

    let count = 0
    while (queue.length) {
        const current = queue.shift()
        output += current
        for (const neighbor of graph[current]) {
            inDegrees[neighbor]--
            if (inDegrees[neighbor] === 0) queue.push(neighbor)
        }
        count++
    }

    if (count !== Object.keys(inDegrees).length) return ''
    return output
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]))
console.log(alienOrder(["z", "x"]))
console.log(alienOrder(["z", "x", "z"]))
console.log(alienOrder(["z", "x", "a", "zb", "zx"]))
