const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var topKFrequent = function (words, k) {
    const map = {}
    words.forEach(word => map[word] ? map[word]++ : map[word] = 1)

    const minHeap = new MinPriorityQueue({
        compare: (w1, w2) => {
            // if count is the same, compare string(length and alphabetic order)
            if (map[w1] === map[w2]) {
                if (w1 === w2) return 0
                return w1 < w2 ? 1 : -1
            }
            return map[w1] < map[w2] ? -1 : 1
        }
    })

    for (const key in map) {
        minHeap.enqueue(key, map[key])
        if (minHeap.size() > k) minHeap.dequeue()
    }
    return minHeap.toArray().reverse()
}

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2))
console.log(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4))
