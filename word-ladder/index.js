// Time Complexity: O(M^2×N), where M is the length of each word and N is the total number of words in the input word list
// Space Complexity: O(M^2×N)
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0

    wordList.push(beginWord)
    const graph = {}
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const pattern = word.slice(0, i) + '*' + word.slice(i + 1)
            if (!graph[pattern]) graph[pattern] = []
            graph[pattern].push(word)
        }
    }

    const queue = [beginWord]
    const visited = new Set(beginWord)
    let answer = 1

    while (queue.length) {
        const currentQueueLength = queue.length;
        for (let i = 0; i < currentQueueLength; i++) {
            const word = queue.shift()
            if (word === endWord) return answer

            for (let i = 0; i < word.length; i++) {
                const pattern = word.slice(0, i) + '*' + word.slice(i + 1)
                for (const neighbor of graph[pattern]) {
                    if (visited.has(neighbor)) continue;
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        answer++
    }
    return 0
}

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
